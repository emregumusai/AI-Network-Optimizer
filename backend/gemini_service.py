"""
Gemini AI integration for network diagnostics
Uses Google Genai SDK
"""

import os
from google import genai
from dotenv import load_dotenv
import traceback

# Load environment variables
load_dotenv()

# Gemini API configuration
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

print(f"[DEBUG] API Key loaded: {GEMINI_API_KEY[:10]}..." if GEMINI_API_KEY else "[ERROR] API Key not found!")
print(f"[DEBUG] Using Gemini 2.5 Flash via Google Genai SDK")

# Initialize Gemini client
try:
    client = genai.Client(api_key=GEMINI_API_KEY)
    print("[DEBUG] Gemini client initialized successfully")
except Exception as e:
    print(f"[ERROR] Failed to initialize Gemini client: {e}")
    client = None


def analyze_network(metrics: dict) -> dict:
    """
    Send network metrics to Gemini AI for diagnosis
    Returns diagnosis with problem type and recommendations
    """
    
    if client is None:
        return {
            "diagnosis": "Gemini AI client başlatılamadı. Lütfen API key'inizi kontrol edin.",
            "issue_type": "unknown",
            "ai_provider": "Error",
            "success": False,
            "error": "Client initialization failed"
        }
    
    # Build Turkish prompt
    prompt = f"""
Sen bir telekomünikasyon ağ uzmanısın ve kullanıcıların internet bağlantı sorunlarını teşhis ediyorsun.

Şu ağ metriklerini analiz et:
- İndirme Hızı: {metrics.get('download_mbps', 0)} Mbps
- Yükleme Hızı: {metrics.get('upload_mbps', 0)} Mbps
- Ping (Gecikme): {metrics.get('ping_ms', 0)} ms
- Paket Kaybı: {metrics.get('packet_loss_percent', 0)}%

Görevin:
1. Bu metriklere göre sorunun nereden kaynaklandığını tespit et:
   - Evdeki cihazlardan mı? (WiFi router, modem, cihaz konumu)
   - Altyapıdan mı? (Fiber kablo, ISP sunucuları, baz istasyonu)

2. Sorunu kısa ve anlaşılır Türkçe ile açıkla (2-3 cümle)

3. Kullanıcıya veya teknik ekibe önerilerde bulun

Cevabını doğrudan ver, başlık veya ek açıklama ekleme.
"""
    
    try:
        print(f"[DEBUG] Sending request to Gemini 1.5 Flash...")
        print(f"[DEBUG] Metrics: {metrics}")
        
        # Send request to Gemini using SDK
        response = client.models.generate_content(
            model="gemini-1.5-flash",
            contents=prompt
        )
        
        diagnosis_text = response.text
        
        print(f"[DEBUG] Gemini response received: {diagnosis_text[:100]}...")
        
        # Determine issue type from metrics
        issue_type = metrics.get("issue_type", "unknown")
        if issue_type is None:
            issue_type = "none"
        
        return {
            "diagnosis": diagnosis_text,
            "issue_type": issue_type,
            "ai_provider": "Gemini 1.5 Flash",
            "success": True
        }
        
    except Exception as e:
        print(f"[ERROR] Gemini API error: {e}")
        print(f"[ERROR] Full traceback: {traceback.format_exc()}")
        
        error_msg = str(e)
        
        return {
            "diagnosis": f"⚠️ AI servisi şu anda yanıt veremiyor.\n\nMetrik Özeti:\n- İndirme: {metrics.get('download_mbps')} Mbps\n- Yükleme: {metrics.get('upload_mbps')} Mbps\n- Ping: {metrics.get('ping_ms')} ms\n- Paket Kaybı: %{metrics.get('packet_loss_percent')}\n\nHata: {error_msg}\n\nLütfen API key'inizi ve internet bağlantınızı kontrol edin.",
            "issue_type": metrics.get("issue_type", "unknown"),
            "ai_provider": "Fallback (Error)",
            "success": False,
            "error": error_msg
        }


def generate_recommendations(issue_type: str, metrics: dict) -> list:
    """
    Generate action recommendations based on issue type
    """
    if issue_type == "local":
        return [
            "Modeminize daha yakın konumlanın",
            "WiFi router'ınızı yeniden başlatın",
            "Başka bir WiFi kanalı deneyin",
            "Ethernet kablosu ile bağlanmayı deneyin"
        ]
    elif issue_type == "infrastructure":
        return [
            "Teknik ekip otomatik olarak bilgilendirildi",
            "Sorunu çözmek için ekip yola çıkarıldı",
            "Tahmini müdahale süresi: 2-4 saat",
            "Süreç hakkında SMS ile bilgilendirileceksiniz"
        ]
    else:
        return [
            "Bağlantınız normal görünüyor",
            "Sorun devam ederse tekrar test edin"
        ]
