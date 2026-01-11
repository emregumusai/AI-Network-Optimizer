"""
Preset network scenarios for demo
Each scenario simulates different network conditions
"""

SCENARIOS = {
    "normal": {
        "name_tr": "İnternet Normal",
        "download_mbps": 100.0,
        "upload_mbps": 50.0,
        "ping_ms": 15.0,
        "packet_loss_percent": 0.0,
        "issue_type": None,
        "description_tr": "Bağlantı sağlıklı, hiçbir sorun tespit edilmedi."
    },
    "slow-wifi": {
        "name_tr": "Yavaş WiFi",
        "download_mbps": 25.0,
        "upload_mbps": 10.0,
        "ping_ms": 45.0,
        "packet_loss_percent": 2.0,
        "issue_type": "local",
        "description_tr": "WiFi sinyal kalitesi düşük. Muhtemelen modemden uzaksınız veya WiFi kanalı yoğun."
    },
    "modem-issue": {
        "name_tr": "Modem Sorunu",
        "download_mbps": 15.0,
        "upload_mbps": 5.0,
        "ping_ms": 85.0,
        "packet_loss_percent": 5.0,
        "issue_type": "local",
        "description_tr": "Modem performans sorunu yaşıyor. Yeniden başlatma gerekebilir."
    },
    "fiber-damage": {
        "name_tr": "Altyapı Arızası",
        "download_mbps": 5.0,
        "upload_mbps": 2.0,
        "ping_ms": 250.0,
        "packet_loss_percent": 15.0,
        "issue_type": "infrastructure",
        "description_tr": "Fiber kablo hasarı veya altyapı sorunu tespit edildi. Teknik ekip yönlendirildi."
    },
    "congestion": {
        "name_tr": "Ağ Yoğunluğu",
        "download_mbps": 35.0,
        "upload_mbps": 15.0,
        "ping_ms": 65.0,
        "packet_loss_percent": 3.0,
        "issue_type": "infrastructure",
        "description_tr": "Bölgesel ağ yoğunluğu nedeniyle hız düşüşü. ISP altyapısı kapasite sorunu yaşıyor."
    },
    "outage": {
        "name_tr": "Kesinti",
        "download_mbps": 0.5,
        "upload_mbps": 0.1,
        "ping_ms": 500.0,
        "packet_loss_percent": 40.0,
        "issue_type": "infrastructure",
        "description_tr": "Ciddi kesinti tespit edildi. Baz istasyonu veya merkez santralde sorun var."
    }
}


def get_scenario(scenario_name: str) -> dict:
    """Get scenario by name, returns 'normal' if not found"""
    return SCENARIOS.get(scenario_name, SCENARIOS["normal"])


def get_all_scenarios() -> dict:
    """Return all available scenarios"""
    return SCENARIOS
