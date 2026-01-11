"""
FastAPI backend for AI-Powered Self-Optimizing Network
Provides network metrics simulation and AI diagnostics
"""

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import random
from datetime import datetime
import traceback

from network_simulator import get_simulated_metrics, calculate_network_status
from gemini_service import analyze_network, generate_recommendations
from scenarios import get_all_scenarios

# Initialize FastAPI app
app = FastAPI(
    title="AI Network Optimizer API",
    description="Backend for AI-Powered Self-Optimizing Network Demo",
    version="1.0.0"
)

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for local development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage for work orders
work_orders = []

# Pydantic models
class NetworkMetrics(BaseModel):
    download_mbps: float
    upload_mbps: float
    ping_ms: float
    packet_loss_percent: float
    scenario: Optional[str] = None

class WorkOrderCreate(BaseModel):
    issue_description: str
    issue_type: str
    metrics: dict


# Routes
@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "online",
        "service": "AI Network Optimizer",
        "version": "1.0.0"
    }


@app.get("/api/health")
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
        "endpoints": [
            "/api/network-status",
            "/api/diagnose",
            "/api/scenarios",
            "/api/work-orders"
        ]
    }


@app.get("/api/network-status")
async def get_network_status(scenario: str = "normal"):
    """
    Get simulated network metrics
    Query param: scenario (normal, slow-wifi, modem-issue, fiber-damage, congestion, outage)
    """
    try:
        metrics = get_simulated_metrics(scenario)
        status = calculate_network_status(metrics)
        
        return {
            "success": True,
            "metrics": metrics,
            "status": status
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/api/diagnose")
async def diagnose_network(metrics: NetworkMetrics):
    """
    Send network metrics to Gemini AI for diagnosis
    """
    try:
        print(f"[DEBUG] Received diagnose request: {metrics}")
        
        # Convert to dict
        metrics_dict = metrics.dict()
        
        print(f"[DEBUG] Calling analyze_network...")
        
        # Get AI diagnosis
        diagnosis = analyze_network(metrics_dict)
        
        print(f"[DEBUG] Got diagnosis: {diagnosis}")
        
        # Generate recommendations
        recommendations = generate_recommendations(
            diagnosis["issue_type"], 
            metrics_dict
        )
        
        result = {
            "success": True,
            "diagnosis": diagnosis["diagnosis"],
            "issue_type": diagnosis["issue_type"],
            "recommendations": recommendations,
            "ai_provider": diagnosis["ai_provider"]
        }
        
        print(f"[DEBUG] Returning result: {result}")
        
        return result
    except Exception as e:
        print(f"[ERROR] Exception in diagnose endpoint: {e}")
        print(f"[ERROR] Traceback: {traceback.format_exc()}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/scenarios")
async def get_scenarios():
    """Get all available demo scenarios"""
    scenarios = get_all_scenarios()
    
    # Format for frontend
    scenario_list = []
    for key, value in scenarios.items():
        scenario_list.append({
            "id": key,
            "name": value["name_tr"],
            "issue_type": value["issue_type"]
        })
    
    return {
        "success": True,
        "scenarios": scenario_list
    }


@app.post("/api/work-orders")
async def create_work_order(order: WorkOrderCreate):
    """
    Create a work order for infrastructure issues
    """
    try:
        # Generate work order
        work_order = {
            "id": f"WO-{random.randint(10000, 99999)}",
            "issue_description": order.issue_description,
            "issue_type": order.issue_type,
            "metrics": order.metrics,
            "status": "assigned",
            "technician": random.choice([
                "Ahmet Yılmaz",
                "Mehmet Demir",
                "Ayşe Kaya",
                "Fatma Şahin"
            ]),
            "priority": "high" if order.issue_type == "infrastructure" else "medium",
            "estimated_arrival": "2-4 saat",
            "created_at": datetime.now().isoformat()
        }
        
        # Store in memory
        work_orders.append(work_order)
        
        return {
            "success": True,
            "work_order": work_order
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/work-orders")
async def get_work_orders():
    """Get all work orders"""
    return {
        "success": True,
        "work_orders": work_orders
    }


@app.delete("/api/work-orders")
async def clear_work_orders():
    """Clear all work orders (for demo reset)"""
    global work_orders
    work_orders = []
    return {
        "success": True,
        "message": "All work orders cleared"
    }


# Run with: uvicorn main:app --reload --host 0.0.0.0 --port 8000
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
