"""
Network metrics simulator
Generates realistic network data with slight variations
"""

import random
from datetime import datetime
from scenarios import get_scenario


def get_simulated_metrics(scenario_name: str = "normal") -> dict:
    """
    Generate simulated network metrics based on scenario
    Adds ±10% random variation for realism
    """
    scenario = get_scenario(scenario_name)
    
    # Add random variation (±10%)
    def add_variation(value: float) -> float:
        if value == 0:
            return 0
        variation = random.uniform(-0.1, 0.1)
        result = value * (1 + variation)
        return max(0, result)  # Ensure non-negative
    
    metrics = {
        "download_mbps": round(add_variation(scenario["download_mbps"]), 2),
        "upload_mbps": round(add_variation(scenario["upload_mbps"]), 2),
        "ping_ms": round(add_variation(scenario["ping_ms"]), 1),
        "packet_loss_percent": round(add_variation(scenario["packet_loss_percent"]), 2),
        "timestamp": datetime.now().isoformat(),
        "scenario": scenario_name,
        "scenario_name_tr": scenario["name_tr"],
        "issue_type": scenario["issue_type"],
        "description_tr": scenario["description_tr"]
    }
    
    return metrics


def calculate_network_status(metrics: dict) -> str:
    """
    Calculate overall network health status
    Returns: 'healthy', 'warning', or 'critical'
    """
    download = metrics.get("download_mbps", 0)
    ping = metrics.get("ping_ms", 0)
    packet_loss = metrics.get("packet_loss_percent", 0)
    
    # Critical conditions
    if download < 10 or ping > 150 or packet_loss > 10:
        return "critical"
    
    # Warning conditions
    if download < 30 or ping > 60 or packet_loss > 2:
        return "warning"
    
    # Healthy
    return "healthy"
