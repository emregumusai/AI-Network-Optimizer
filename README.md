# AI Network Optimizer - Yapay Zeka Destekli Kendini Optimize Eden Ağ

🌐 **AI-Powered Self-Optimizing Network Demo**

Telekomünikasyon ağları için geliştirilmiş, Gemini AI tabanlı proaktif ağ izleme ve tanılama sistemi.

## 🎯 Proje Hakkında

Bu sistem, internet bağlantı sorunlarını kullanıcı fark etmeden tespit eden ve otomatik olarak çözüm öneren akıllı bir "Sanal Doktor"dur.

### Özellikler

- ✅ Gerçek zamanlı ağ metrikleri simülasyonu
- 🤖 Gemini 1.5 Flash AI ile akıllı tanılama
- 🏠 Sorun kaynağı tespiti (Evdeki cihazlar vs Altyapı)
- 🔧 Otomatik teknik ekip görevlendirme
- 📊 Modern ve interaktif dashboard
- 🎨 6 farklı demo senaryosu

## 🛠️ Teknoloji Stack

### Backend
- **Python 3.10+**
- **FastAPI** - Modern, hızlı web framework
- **Gemini 1.5 Flash** - Google AI
- **Uvicorn** - ASGI server

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Axios** - HTTP client

## 📋 Gereksinimler

- Python 3.10 veya üzeri
- Node.js 18 veya üzeri
- npm veya yarn
- Gemini API Key (projeye dahil)

## 🚀 Kurulum ve Çalıştırma

### 1. Backend Kurulumu

```powershell
# Backend klasörüne git
cd backend

# Sanal ortam oluştur (opsiyonel ama önerilen)
python -m venv venv
.\venv\Scripts\Activate.ps1

# Bağımlılıkları yükle
pip install -r requirements.txt

# Sunucuyu başlat
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Backend şimdi çalışıyor: http://localhost:8000

### 2. Frontend Kurulumu

Yeni bir terminal penceresi açın:

```powershell
# Frontend klasörüne git
cd frontend

# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev
```

Frontend şimdi çalışıyor: http://localhost:5173

## 🎮 Kullanım

1. Tarayıcınızda http://localhost:5173 adresini açın
2. Dashboard üzerinde 6 farklı demo senaryosundan birini seçin:
   - **İnternet Normal** - Sağlıklı bağlantı
   - **Yavaş WiFi** - WiFi sinyal sorunu
   - **Modem Sorunu** - Modem performans problemi
   - **Altyapı Arızası** - Fiber kablo hasarı
   - **Ağ Yoğunluğu** - Bölgesel trafik sorunu
   - **Kesinti** - Ciddi kesinti durumu

3. Seçtiğiniz senaryoya göre:
   - Ağ metrikleri (indirme, yükleme, ping, paket kaybı) görüntülenir
   - Gemini AI otomatik analiz yapar
   - Sorun kaynağı tespit edilir (ev vs altyapı)
   - Önerilen aksiyonlar listelenir
   - Gerekirse otomatik iş emri oluşturulur

## 📁 Proje Yapısı

```
YapayZekaDestekliKendiniOptimizeEdenAg/
├── backend/
│   ├── main.py                 # FastAPI uygulaması
│   ├── gemini_service.py       # Gemini AI entegrasyonu
│   ├── network_simulator.py    # Ağ simülasyonu
│   ├── scenarios.py            # Demo senaryoları
│   ├── requirements.txt        # Python bağımlılıkları
│   └── .env                    # API anahtarı
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx        # Ana konteyner
│   │   │   ├── MetricsCard.jsx      # Metrik kartları
│   │   │   ├── StatusIndicator.jsx  # Durum göstergesi
│   │   │   ├── AIDiagnosis.jsx      # AI analiz paneli
│   │   │   ├── ActionPanel.jsx      # Öneriler paneli
│   │   │   ├── WorkOrderPanel.jsx   # İş emri paneli
│   │   │   └── ScenarioButtons.jsx  # Senaryo butonları
│   │   ├── services/
│   │   │   └── api.js               # API servisleri
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── README.md
```

## 🔌 API Endpoints

### Backend API (Port 8000)

- `GET /` - Health check
- `GET /api/network-status?scenario={id}` - Ağ metriklerini al
- `POST /api/diagnose` - AI tanısı yap
- `GET /api/scenarios` - Senaryoları listele
- `POST /api/work-orders` - İş emri oluştur
- `GET /api/work-orders` - İş emirlerini listele

## 🎨 Demo Senaryoları

| Senaryo | İndirme | Yükleme | Ping | Paket Kaybı | Tip |
|---------|---------|---------|------|-------------|-----|
| Normal | ~100 Mbps | ~50 Mbps | ~15 ms | ~0% | - |
| Yavaş WiFi | ~25 Mbps | ~10 Mbps | ~45 ms | ~2% | Local |
| Modem Sorunu | ~15 Mbps | ~5 Mbps | ~85 ms | ~5% | Local |
| Altyapı Arızası | ~5 Mbps | ~2 Mbps | ~250 ms | ~15% | Infrastructure |
| Ağ Yoğunluğu | ~35 Mbps | ~15 Mbps | ~65 ms | ~3% | Infrastructure |
| Kesinti | ~0.5 Mbps | ~0.1 Mbps | ~500 ms | ~40% | Infrastructure |

## 🤖 Gemini AI Entegrasyonu

Sistem, Google'ın Gemini 1.5 Flash modelini kullanarak:
- Ağ metriklerini analiz eder
- Sorun kaynağını tespit eder (evdeki cihazlar vs altyapı)
- Türkçe açıklamalar ve öneriler sunar
- Otomatik eylem planları oluşturur

## 🔧 Özelleştirme

### Yeni Senaryo Ekleme

[backend/scenarios.py](backend/scenarios.py) dosyasına yeni senaryo ekleyin:

```python
"yeni-senaryo": {
    "name_tr": "Yeni Senaryo",
    "download_mbps": 50.0,
    "upload_mbps": 25.0,
    "ping_ms": 30.0,
    "packet_loss_percent": 1.0,
    "issue_type": "local",  # veya "infrastructure"
    "description_tr": "Senaryo açıklaması"
}
```

### Gemini Prompt Düzenleme

[backend/gemini_service.py](backend/gemini_service.py) dosyasında `analyze_network` fonksiyonundaki prompt'u özelleştirin.

## 🐛 Sorun Giderme

### Backend başlamıyor
```powershell
# Port 8000 kullanımda olabilir
uvicorn main:app --reload --port 8001
```

### Frontend backend'e bağlanamıyor
- Backend'in çalıştığından emin olun
- CORS ayarlarını kontrol edin
- [vite.config.js](frontend/vite.config.js) proxy ayarlarını kontrol edin

### Gemini API hatası
- API key'in [backend/.env](backend/.env) dosyasında doğru olduğundan emin olun
- İnternet bağlantınızı kontrol edin
- Gemini API kotanızı kontrol edin

## 📝 Notlar

- Bu bir **demo projedir**, gerçek ağ ölçümleri yapmaz
- Tüm metrikler simüle edilmiştir
- Gemini AI yanıtları gerçek zamanlıdır
- Production kullanımı için ek güvenlik ve optimizasyon gerekir

## 🎓 Öğrenme Kaynakları

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [React Documentation](https://react.dev/)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [Tailwind CSS](https://tailwindcss.com/)

## 📄 Lisans

Bu proje eğitim ve demo amaçlıdır.

## 👥 Katkıda Bulunma

Önerileriniz için issue açabilir veya pull request gönderebilirsiniz.

---

**Geliştirici:** AI Network Optimizer Team
**Tarih:** Ocak 2026
**Versiyon:** 1.0.0

🚀 Başarılı testler!
