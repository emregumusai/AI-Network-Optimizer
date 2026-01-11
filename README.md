# 🌐 AI Network Optimizer

**Yapay Zeka Destekli Kendini Optimize Eden Ağ Sistemi**

Proactive AI Network Agent, telekomünikasyon erişim ağlarında yaşanan performans problemlerini kullanıcıyı etkilemeden önce tespit etmeyi amaçlayan, yapay zekâ destekli proaktif bir AIOps sistemidir.

![AI Network Optimizer Banner](https://img.shields.io/badge/AI-Gemini%201.5%20Flash-blue?style=for-the-badge&logo=google)
![Python](https://img.shields.io/badge/Python-3.10+-green?style=for-the-badge&logo=python)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-teal?style=for-the-badge&logo=fastapi)

---

## 📋 İçindekiler

- [Amaç ve Problem Tanımı](#-amaç-ve-problem-tanımı)
- [Sistem Mimarisi](#-sistem-mimarisi-ve-çalışma-mantığı)
- [Özellikler](#-özellikler)
- [Demo Senaryoları](#-demo-senaryoları)
- [Teknoloji Stack](#-teknoloji-stack)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [Demo Kapsamı ve Sınırlamalar](#-demo-kapsamı-ve-sınırlamalar)

---

## 🎯 Amaç ve Problem Tanımı

Günümüzde telekomünikasyon ağlarında yaşanan performans problemleri, çoğunlukla **kullanıcı şikâyetleri sonrasında** fark edilmekte ve bu durum reaktif bir arıza yönetim sürecine yol açmaktadır. Bu yaklaşım:

- ⏱️ Ortalama çözüm süresinin uzamasına
- 🚗 Gereksiz saha müdahalelerine  
- 😞 Müşteri memnuniyetinin azalmasına neden olmaktadır

**Proactive AI Network Agent** projesinin amacı:

✅ Ağ performans verilerini sürekli izleyerek olasılıklı sorunları **kullanıcıyı etkilemeden önce tespit etmek**  
✅ Bireysel ve kitlesel problemleri **ayırt edebilmek**  
✅ Uygun operasyonel aksiyonların **proaktif olarak alınmasını sağlamak**

---

## 🏗️ Sistem Mimarisi ve Çalışma Mantığı

AI Network Optimizer, ağ durumunu senaryo tabanlı olarak analiz eden, metrikleri yorumlayan ve sonuçları kullanıcıya sade bir arayüzle sunan bir demo sistemidir.

### Sistem Akışı

```
1️⃣ Kullanıcı bir Demo Senaryosu seçer
          ↓
2️⃣ Seçilen senaryoya ait ağ metrikleri simüle edilir
          ↓
3️⃣ Metrikler eşik değerlerle karşılaştırılır
          ↓
4️⃣ Genel durum belirlenir (Sağlıklı / Dikkat / Kritik)
          ↓
5️⃣ AI Tanı Sistemi devreye girerek metinsel analiz üretir
          ↓
6️⃣ Uygulanabilir Önerilen Aksiyonlar sunulur
```

Bu yapı, gerçek bir ağ izleme sisteminin **sadeleştirilmiş bir temsilidir**.

---

## ✨ Özellikler

### 🤖 AI Tanı Sistemi
- **Gemini 1.5 Flash** ile desteklenen akıllı ağ analizi
- Problemin kaynağını otomatik tespit (modem, altyapı, cihaz)
- Türkçe dilinde anlaşılır açıklamalar

### 📊 Gerçek Zamanlı Metrikler
- **İndirme Hızı** (Mbps) - Renk kodlu gösterim
- **Yükleme Hızı** (Mbps) - Performans takibi
- **Ping (Gecikme)** (ms) - Ağ gecikmesi ölçümü
- **Paket Kaybı** (%) - Bağlantı kalitesi

### 🎭 6 Demo Senaryosu
Her senaryo, farklı ağ problemlerini gerçekçi şekilde simüle eder

### 💡 Akıllı Öneriler
- Soruna özel çözüm önerileri
- Adım adım kullanıcı talimatları
- Teknik ekip bilgilendirme sistemi

### 🔧 Otomatik İş Emri
Altyapı sorunlarında sistem otomatik olarak:
- Teknik ekibi bilgilendirir
- İş emri oluşturur
- Tahmini çözüm süresi bildirir

---

## 🎬 Demo Senaryoları

Uygulama, farklı ağ problemlerini temsil eden ön tanımlı senaryolar içerir. Her senaryo, farklı metrik değerleri ve farklı sonuç ekranları üretir.

| Senaryo | Açıklama | İndirme | Yükleme | Ping | Paket Kaybı |
|---------|----------|---------|---------|------|-------------|
| 🟢 **İnternet Normal** | Sağlıklı bağlantı, optimal performans | ~100 Mbps | ~50 Mbps | ~15 ms | ~0% |
| 🟡 **Yavaş WiFi** | WiFi sinyali zayıf, düşük hızlar | ~25 Mbps | ~10 Mbps | ~45 ms | ~1% |
| 🟠 **Modem Sorunu** | Modem kaynaklı performans düşüşü | ~15 Mbps | ~5 Mbps | ~80 ms | ~5% |
| 🔴 **Altyapı Arızası** | Fiber hasar, ciddi bağlantı sorunu | ~5 Mbps | ~2 Mbps | ~200 ms | ~15% |
| 🟣 **Ağ Yoğunluğu** | Yoğun kullanım saatleri | ~35 Mbps | ~15 Mbps | ~60 ms | ~3% |
| ⚫ **Kesinti** | Tam veya neredeyse tam kesinti | <1 Mbps | <0.5 Mbps | >400 ms | >30% |

---

## 🛠️ Teknoloji Stack

### Backend
```
🐍 Python 3.10+          - Core language
⚡ FastAPI               - Modern, hızlı web framework
🤖 Gemini 1.5 Flash      - Google AI model
🦄 Uvicorn               - ASGI server
🔐 python-dotenv         - Environment management
```

### Frontend
```
⚛️ React 18              - UI framework
⚡ Vite                  - Build tool & dev server
🎨 Tailwind CSS          - Utility-first styling
🎭 Lucide React          - Icon library
📡 Axios                 - HTTP client
```

---

## 🚀 Kurulum

### Gereksinimler
- Python 3.10 veya üzeri
- Node.js 18 veya üzeri
- Gemini API Key ([buradan alın](https://aistudio.google.com/app/apikey))

### 1️⃣ Repository'yi Klonlayın
```bash
git clone https://github.com/emregumusai/AI-Network-Optimizer.git
cd AI-Network-Optimizer
```

### 2️⃣ Backend Kurulumu
```bash
cd backend

# Virtual environment oluştur (opsiyonel ama önerilen)
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac

# Bağımlılıkları yükle
pip install -r requirements.txt

# .env dosyası oluştur
copy .env.example .env
# .env dosyasını düzenleyin ve GEMINI_API_KEY'inizi ekleyin
```

### 3️⃣ Frontend Kurulumu
```bash
cd ../frontend

# Bağımlılıkları yükle
npm install
```

---

## 💻 Kullanım

### Backend Server'ı Başlatın
```bash
cd backend
python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

Backend şu adreste çalışacak: **http://127.0.0.1:8000**

### Frontend Server'ı Başlatın
```bash
cd frontend
npm run dev
```

Frontend şu adreste çalışacak: **http://localhost:5173**

### 🎮 Demo'yu Test Edin

1. Tarayıcınızda `http://localhost:5173` adresini açın
2. Üst kısımda bulunan **Demo Senaryoları** bölümünden bir senaryo seçin
3. Sistem otomatik olarak:
   - Ağ metriklerini simüle edecek
   - AI analizi yapacak
   - Öneriler sunacak
   - Gerekirse iş emri oluşturacak

---

## 📸 Ekran Görüntüleri

### 🟢 İnternet Normal - Sağlıklı Bağlantı
Sistem optimal performans gösterdiğinde yeşil renkli göstergelerle sağlıklı durumu bildirir. AI tanı sistemi ağın mükemmel durumda olduğunu onaylar.

**Özellikler:**
- ✅ İndirme: ~106 Mbps (Yeşil)
- ✅ Yükleme: ~50 Mbps (Yeşil)
- ✅ Ping: ~15 ms (Yeşil)
- ✅ Paket Kaybı: %0 (Yeşil)
- 🤖 AI Tanı: "Ağ metrikleri mükemmel durumda..."
- 💡 Öneri: Herhangi bir işlem gerekmemektedir

---

### 🟠 Modem Sorunu - Dikkat Gerekli
Modem kaynaklı performans düşüşü tespit edildiğinde sistem turuncu/sarı renkte uyarı verir. AI, sorunun evdeki cihazlardan kaynaklandığını tespit eder.

**Özellikler:**
- ⚠️ İndirme: ~14.74 Mbps (Turuncu)
- ⚠️ Yükleme: ~5.4 Mbps (Turuncu)
- ⚠️ Ping: ~78.6 ms (Turuncu)
- ⚠️ Paket Kaybı: %4.56 (Turuncu)
- 🤖 AI Tanı: "Modem seviyesinde bir sorun tespit edildi. İndirme hızı 14.74 Mbps ile normalin altında, ping değeri 78.6 ms ile yüksek ve %4.56 paket kaybı mevcut. Bu sorun evdeki modem veya cihazlarınızdan kaynaklanıyor, altyapı tarafında bir problem yok. Modem yeniden başlatılmalı ve eğer sorun devam ederse modem değişimi gerekebilir."
- 💡 Öneriler:
  - 🔌 Modemi kapatıp 30 saniye bekleyip tekrar açın
  - 📡 WiFi yerine ethernet kablosu kullanmayı deneyin
  - 🔄 Modem firmware güncellemesini kontrol edin
  - ⚠️ Sorun devam ederse yeni modem talep edin

---

### 🔴 Altyapı Arızası - Kritik Durum
Fiber hasar veya altyapı kaynaklı ciddi problemlerde sistem kırmızı alarm verir. Otomatik olarak teknik ekip bilgilendirilir ve iş emri oluşturulur.

**Özellikler:**
- 🔴 İndirme: ~4.7 Mbps (Kırmızı)
- 🔴 Yükleme: ~1.88 Mbps (Kırmızı)
- 🔴 Ping: ~235.7 ms (Kırmızı)
- 🔴 Paket Kaybı: %15.66 (Kırmızı)
- 🤖 AI Tanı: "Altyapı tarafında ciddi sorun tespit edildi. Fiber kabloda hasar veya baz istasyonunda problem olabilir..."
- 🔧 **Otomatik İş Emri Oluşturuldu:**
  - ✅ Teknik ekip otomatik bilgilendirildi
  - 🚗 Sorunu çözmek için ekip yola çıkarıldı
  - ⏱️ Tahmini müdahale süresi: 2-4 saat
  - 📱 Süreç hakkında SMS ile bilgilendirileceksiniz

---

### ⚫ Kesinti - Sorun Tespit Edildi
Ağ tamamen veya neredeyse tamamen kullanılamaz durumda. Sistem acil müdahale gerektiğini bildirir.

**Özellikler:**
- 💀 İndirme: ~0.48 Mbps (Kritik)
- 💀 Yükleme: ~0.1 Mbps (Kritik)
- 💀 Ping: ~488.6 ms (Kritik)
- 💀 Paket Kaybı: %38.41 (Kritik)
- 🤖 AI Tanı: "Ağ bağlantısında ciddi sorunlar var. İnternet neredeyse tamamen kullanılamaz durumda..."
- 🚨 **Acil Durum:** Teknik destek derhal çağrılmalı

---

### 🟣 Ağ Yoğunluğu - Trafik Fazla
Yoğun kullanım saatlerinde ağda meydana gelen performans düşüşü. Geçici bir durum olduğu vurgulanır.

**Özellikler:**
- 🟣 İndirme: ~35.68 Mbps (Sarı)
- 🟣 Yükleme: ~16.49 Mbps (Sarı)
- 🟣 Ping: ~58.9 ms (Sarı)
- 🟣 Paket Kaybı: %3.03 (Sarı)
- 🤖 AI Tanı: "Ağ yoğunluğu nedeniyle performans düşüşü gözlemleniyor. Bu durum genellikle akşam saatleri gibi yoğun kullanım dönemlerinde normaldir..."
- ⏰ Öneri: Yoğun saatler dışında daha iyi performans alabilirsiniz

---

### 🤖 AI Tanı Sistemi - Çalışma Anı
Gemini 1.5 Flash AI modeli ağ metriklerini analiz ederken gösterilen ara ekran. Kullanıcı AI'nın gerçek zamanlı çalıştığını görebilir ve sistemin arka planda akıllı analiz yaptığını anlayabilir.

**AI Analiz Süreci:**
1. ⚙️ Ağ metrikleri toplanıyor
2. 🤖 Veriler Gemini AI'a gönderiliyor
3. 🧠 Akıllı analiz yapılıyor (problem kaynağı belirleniyor)
4. 📊 Sonuçlar yorumlanıyor
5. ✅ Uygulanabilir öneriler oluşturuluyor

**Görülen Mesaj:**
```
⚠️ AI servisi şu anda yanıt veremiyor.

Metrik Özeti:
- İndirme: 14.74 Mbps
- Yükleme: 5.4 Mbps
- Ping: 78.6 ms
- Paket Kaybı: %4.56

Hata: 404 NOT_FOUND: models/gemini-1.5-flash is not found...
```

> 💡 **Not:** Demo ortamında bazen AI servis hatası simüle edilir. Bu, gerçek sistemlerde hata yönetiminin nasıl olacağını gösterir.

---

## 📊 Gerçek Zamanlı Ağ Metrikleri

Her senaryo için aşağıdaki temel metrikler hesaplanır ve gösterilir:

### İndirme Hızı (Mbps)
```
🟢 Mükemmel: > 50 Mbps
🟡 Kabul Edilebilir: 10-50 Mbps
🔴 Sorunlu: < 10 Mbps
```

### Yükleme Hızı (Mbps)
```
🟢 Mükemmel: > 20 Mbps
🟡 Kabul Edilebilir: 5-20 Mbps
🔴 Sorunlu: < 5 Mbps
```

### Ping - Gecikme (ms)
```
🟢 Düşük: < 50 ms
🟡 Orta: 50-150 ms
🔴 Yüksek: > 150 ms
```

### Paket Kaybı (%)
```
🟢 Normal: < 2%
🟡 Dikkat: 2-10%
🔴 Kritik: > 10%
```

Metrikler, kullanıcı deneyimini artırmak amacıyla **renk kodları** ile sunulur. Bu sayede kullanıcı, teknik bilgiye sahip olmasa bile bağlantı durumunu hızlıca anlayabilir.

---

## ⚠️ Durum Tespiti ve Uyarı Mekanizması

Sistem, metrikleri analiz ederek genel bir durum mesajı üretir:

| Durum | İkon | Açıklama |
|-------|------|----------|
| **🟢 Bağlantı Sağlıklı** | ✅ | Tüm sistemler normal çalışıyor |
| **🟡 Dikkat Gerekli** | ⚠️ | Performans düşüşü tespit edildi |
| **🔴 Sorun Tespit Edildi** | ❌ | Ciddi problem var, müdahale gerekli |

Bu uyarılar, ağ kalitesinin genel özetini **tek bir bakışta** sunar ve kullanıcının hangi seviyede müdahale etmesi gerektiğini açıkça belirtir.

---

## 🔍 AI Tanı Sistemi Detayları

AI Tanı Sistemi, ağ metriklerini birlikte değerlendirerek **problemin olası kaynağını** belirlemeye çalışır.

### Analiz Kriterleri

```python
def analyze_network(metrics):
    """
    AI, şu soruları yanıtlar:
    1. Sorun evdeki cihazlardan mı kaynaklanıyor?
    2. Altyapı tarafında bir problem var mı?
    3. Hangi metrik en sorunlu?
    4. Kullanıcı ne yapmalı?
    """
```

### Örnek AI Çıkarımları

**İnternet Normal Senaryosu:**
```
"Ağ metrikleri mükemmel durumda. İndirme hızı 100+ Mbps, 
yükleme hızı 50 Mbps civarında, ping değeri çok düşük (15ms) 
ve paket kaybı yok. Sisteminiz optimal performans gösteriyor. 
Herhangi bir müdahale gerekmemektedir."
```

**Modem Sorunu Senaryosu:**
```
"Modem seviyesinde bir sorun tespit edildi. İndirme hızı 
14.74 Mbps ile normalin altında, ping değeri 78.6 ms ile 
yüksek ve %4.56 paket kaybı mevcut. Bu sorun evdeki modem 
veya cihazlarınızdan kaynaklanıyor, altyapı tarafında bir 
problem yok. Modem yeniden başlatılmalı ve eğer sorun devam 
ederse modem değişimi gerekebilir."
```

**Altyapı Arızası Senaryosu:**
```
"Altyapı tarafında ciddi sorun tespit edildi. Fiber kabloda 
hasar veya baz istasyonunda problem olabilir. İndirme hızı 
sadece 4.7 Mbps, ping 235 ms gibi çok yüksek ve %15.66 paket 
kaybı var. Bu seviyedeki bir problem kullanıcı tarafından 
çözülemez. Teknik ekip otomatik bilgilendirildi ve saha 
ekibi yola çıkarıldı."
```

> 💡 **Not:** Bazı demo senaryolarında, harici AI servisinin yanıt veremediği durumlar da özellikle gösterilerek **hata yönetimi senaryosu** simüle edilmiştir.

---

## 💡 Önerilen Aksiyonlar

Tanı sonucuna göre sistem, kullanıcıya **uygulanabilir öneriler** sunar:

### 🏠 Evdeki Sorunlar İçin
- 📡 WiFi yerine **Ethernet kablosu** kullanılması
- 🔄 **Modem yeniden başlatılması** (30 saniye bekleme)
- 🔧 Modem **firmware güncellemesinin** kontrol edilmesi
- 📍 Router'ın daha iyi bir **konuma taşınması**
- 🔌 Modem **donanım değişimi** önerisi

### 🏗️ Altyapı Sorunları İçin
- ✅ Teknik ekip **otomatik bilgilendirildi**
- 🚗 Saha ekibi **yola çıkarıldı**
- ⏱️ Tahmini müdahale süresi: **2-4 saat**
- 📱 Süreç hakkında **SMS ile bilgilendirileceksiniz**
- 📞 Acil durumlarda **teknik destek hattı: 444 0 XXX**

### ✅ Sorun Yoksa
- 🎉 **Ağınız sağlıklı çalışıyor**
- 🔍 Herhangi bir işlem **gerekmemektedir**
- 🔄 Düzenli **bakımınızı sürdürün**
- 📊 İhtiyaç duyulduğunda **tekrar test edin**

Bu bölüm, kullanıcının **ne yapması gerektiğini** net ve sade şekilde anlamasını sağlar.

---

## 🎓 Demo Kapsamı ve Sınırlamalar

Bu proje bir **demo uygulamasıdır**.

### ✅ Demo Özellikleri
- Tüm ağ verileri **simüle edilmiştir**
- Gerçek ağ ölçümü **yapılmaz**
- Amaç, arayüz, analiz mantığı ve kullanıcı deneyimini **göstermektir**

### 🎯 Kullanım Alanları
- 📚 **Eğitim** amaçlı kullanım
- 🎤 **Sunum** ve demo gösterimleri
- 🧪 **Kavramsal prototip** çalışmaları
- 🎨 **UI/UX** tasarım referansı
- 🏆 **Portfolyo** projesi

### 🔮 Gerçek Ortam İçin Geliştirmeler
Üretim ortamında kullanılması için eklenmesi gerekenler:
- 📡 Gerçek ağ ölçüm araçları (ping, speedtest)
- 🗄️ Veritaritabanı entegrasyonu (PostgreSQL, MongoDB)
- 👥 Kullanıcı kimlik doğrulama sistemi
- 📊 Geçmiş veri analizi ve trend takibi
- 📱 Mobil uygulama (React Native)
- 🔔 Push notification servisi
- 📈 Detaylı raporlama ve dashboard
- 🔐 API güvenliği ve rate limiting
- 🌍 Multi-language support

---

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Bu repository'yi **fork** edin
2. Yeni bir **branch** oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi **commit** edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi **push** edin (`git push origin feature/amazing-feature`)
5. Bir **Pull Request** açın

---

## 📄 Lisans

Bu proje açık kaynak kodludur ve eğitim amaçlı kullanım için tasarlanmıştır.

---

## 📞 İletişim

**Proje Sahibi:** [@emregumusai](https://github.com/emregumusai)

**Repository:** [AI-Network-Optimizer](https://github.com/emregumusai/AI-Network-Optimizer)

---

## 🙏 Teşekkürler

- 🤖 **Google Gemini AI** - Akıllı ağ analizi için
- ⚡ **FastAPI** - Modern backend framework
- ⚛️ **React & Vite** - Hızlı ve modern frontend
- 🎨 **Tailwind CSS** - Güzel tasarım sistemi
- 🎭 **Lucide Icons** - Mükemmel ikon seti

---

<div align="center">

**⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐**

Made with ❤️ by [Emre Gumus AI](https://github.com/emregumusai)

**Demo Amaçlı - Tüm veriler simüle edilmiştir**

</div>
