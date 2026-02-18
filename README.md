🇹🇷 [Türkçe](README.tr.md) | 🇬🇧 English

---

<div align="center">

# 🌐 AI-Powered Self-Optimizing Network System

**Proactive Network Performance Monitoring with AI Diagnostics**

A proactive AIOps platform designed to detect and diagnose network performance issues in telecommunications access networks before they impact end users.

![Python](https://img.shields.io/badge/Python-3.10+-green?style=for-the-badge&logo=python)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-teal?style=for-the-badge&logo=fastapi)
![License](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg?style=for-the-badge)

</div>

---

## 📋 Table of Contents

- [Purpose & Problem Statement](#-purpose--problem-statement)
- [System Architecture](#-system-architecture--workflow)
- [Key Features](#-key-features)
- [Demo Scenarios](#-demo-scenarios)
- [Technology Stack](#-technology-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Screenshots](#-screenshots)
- [⭐ Star This Project](#-star-this-project)
- [Contributing](#-contributing)
- [Author](#-author)
- [License](#-license)

---

## 🎯 Purpose & Problem Statement

In modern telecommunications networks, performance issues are often discovered **after user complaints**, leading to a reactive incident management process. This approach results in:

- ⏱️ Extended mean time to resolution (MTTR)
- 🚗 Unnecessary field interventions  
- 😞 Reduced customer satisfaction

**Proactive AI Network Agent** aims to:

✅ Continuously monitor network performance data to detect potential issues **before they impact users**  
✅ Distinguish between **individual and mass-scale problems**  
✅ Enable **proactive operational actions** to maintain service quality

---

## 🏗️ System Architecture & Workflow

The AI Network Optimizer is a scenario-based demo system that analyzes network conditions, interprets metrics, and presents results through a clean user interface.

### System Workflow

```
1️⃣ User selects a Demo Scenario
          ↓
2️⃣ Network metrics for the selected scenario are simulated
          ↓
3️⃣ Metrics are compared against threshold values
          ↓
4️⃣ Overall status is determined (Healthy / Warning / Critical)
          ↓
5️⃣ AI Diagnosis System analyzes and generates insights
          ↓
6️⃣ Actionable Recommendations are presented
```

This structure represents a **simplified version** of a real network monitoring system.

---

## ✨ Key Features

### AI Diagnosis System
- AI-powered intelligent network analysis
- Automatic root cause detection (modem, infrastructure, device)
- Clear explanations in natural language

### 📊 Real-Time Metrics
- **Download Speed** (Mbps) - Color-coded display
- **Upload Speed** (Mbps) - Performance tracking
- **Ping (Latency)** (ms) - Network delay measurement
- **Packet Loss** (%) - Connection quality indicator

### 🎭 6 Demo Scenarios
Each scenario realistically simulates different network problems

### 💡 Smart Recommendations
- Issue-specific solution suggestions
- Step-by-step user instructions
- Technical team notification system

### 🔧 Automated Work Orders
For infrastructure issues, the system automatically:
- Notifies technical teams
- Creates work orders
- Provides estimated resolution time

---

## 🎬 Demo Scenarios

The application includes predefined scenarios representing different network problems. Each scenario generates different metric values and result screens.

| Scenario | Description | Download | Upload | Ping | Packet Loss |
|---------|----------|---------|---------|------|-------------|
| 🟢 **Normal Connection** | Healthy connection, optimal performance | ~100 Mbps | ~50 Mbps | ~15 ms | ~0% |
| 🟡 **Slow WiFi** | Weak WiFi signal, reduced speeds | ~25 Mbps | ~10 Mbps | ~45 ms | ~1% |
| 🟠 **Modem Issue** | Modem-related performance degradation | ~15 Mbps | ~5 Mbps | ~80 ms | ~5% |
| 🔴 **Infrastructure Failure** | Fiber damage, serious connectivity issue | ~5 Mbps | ~2 Mbps | ~200 ms | ~15% |
| 🟣 **Network Congestion** | Peak usage hours | ~35 Mbps | ~15 Mbps | ~60 ms | ~3% |
| ⚫ **Outage** | Complete or near-complete outage | <1 Mbps | <0.5 Mbps | >400 ms | >30% |

---

## 🛠️ Technology Stack

### Backend
- Python 3.10+ - Core language
- FastAPI - Modern web framework
- Google Gemini API - AI integration
- Uvicorn - ASGI server
- python-dotenv - Environment management

### Frontend
- React 18 - UI framework
- Vite - Build tool & dev server
- Tailwind CSS - Utility-first styling
- Lucide React - Icon library
- Axios - HTTP client

---

## 🚀 Installation

### Requirements
- Python 3.10 or higher
- Node.js 18 or higher
- Google AI API Key ([get it here](https://aistudio.google.com/app/apikey))

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/emregumusai/AI-Network-Optimizer.git
cd AI-Network-Optimizer
```

### 2️⃣ Backend Setup
```bash
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac

# Install dependencies
pip install -r requirements.txt

# Create .env file
copy .env.example .env
# Edit the .env file and add your GEMINI_API_KEY
```

### 3️⃣ Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install
```

---

## 💻 Usage

### Start the Backend Server
```bash
cd backend
python -m uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

Backend will run at: **http://127.0.0.1:8000**

### Start the Frontend Server
```bash
cd frontend
npm run dev
```

Frontend will run at: **http://localhost:5173**

### 🎮 Test the Demo

1. Open `http://localhost:5173` in your browser
2. Select a scenario from the **Demo Scenarios** section at the top
3. The system will automatically:
   - Simulate network metrics
   - Perform AI analysis
   - Provide recommendations
   - Create work orders if necessary

---

## 📸 Screenshots

<img width="1032" height="1274" alt="Screenshot 2026-01-11 200357" src="https://github.com/user-attachments/assets/40c0f7f5-7643-4e54-a947-955b1f50a77e" />

### 🟢 Normal Connection - Healthy Status
When the system performs optimally, green indicators show healthy status. The AI diagnosis system confirms the network is in excellent condition.

**Features:**
- ✅ Download: ~106 Mbps (Green)
- ✅ Upload: ~50 Mbps (Green)
- ✅ Ping: ~15 ms (Green)
- ✅ Packet Loss: 0% (Green)
- 🤖 AI Diagnosis: "Network metrics are in excellent condition..."
- 💡 Recommendation: No action required

---

<img width="1012" height="1332" alt="Screenshot 2026-01-11 200933" src="https://github.com/user-attachments/assets/307f9fe9-c50e-461f-bf3d-9b1f6c84808a" />

### 🟠 Modem Issue - Attention Required
When modem-related performance issues are detected, the system displays orange/yellow warnings. AI identifies that the problem originates from home devices.

**Features:**
- ⚠️ Download: ~14.74 Mbps (Orange)
- ⚠️ Upload: ~5.4 Mbps (Orange)
- ⚠️ Ping: ~78.6 ms (Orange)
- ⚠️ Packet Loss: 4.56% (Orange)
- 🤖 AI Diagnosis: "Modem-level issue detected. Download speed is below normal at 14.74 Mbps, ping is high at 78.6 ms, and 4.56% packet loss is present. This issue stems from your modem or home devices, not infrastructure. Modem should be restarted, and if the problem persists, modem replacement may be necessary."
- 💡 Recommendations:
  - 🔌 Power cycle the modem (wait 30 seconds)
  - 📡 Try using ethernet cable instead of WiFi
  - 🔄 Check for modem firmware updates
  - ⚠️ Request a new modem if issue persists

---

<img width="2167" height="1328" alt="Screenshot 2026-01-11 201015" src="https://github.com/user-attachments/assets/1bab623d-e121-4a6c-80d1-3ecf4389453f" />

### 🔴 Infrastructure Failure - Critical Status
For fiber damage or serious infrastructure problems, the system triggers a red alert. Technical teams are automatically notified and work orders are created.

**Features:**
- 🔴 Download: ~4.7 Mbps (Red)
- 🔴 Upload: ~1.88 Mbps (Red)
- 🔴 Ping: ~235.7 ms (Red)
- 🔴 Packet Loss: 15.66% (Red)
- 🤖 AI Diagnosis: "Serious infrastructure issue detected. Possible fiber cable damage or base station problems..."
- 🔧 **Automatic Work Order Created:**
  - ✅ Technical team automatically notified
  - 🚗 Team dispatched to resolve the issue
  - ⏱️ Estimated intervention time: 2-4 hours
  - 📱 You will be notified via SMS about the process

---

<img width="2105" height="1350" alt="Screenshot 2026-01-11 201043" src="https://github.com/user-attachments/assets/1ffa0cb9-1625-4f46-a358-66d7c003abf2" />

### ⚫ Outage - Issue Detected
Network is completely or nearly completely unusable. System indicates emergency intervention is required.

**Features:**
- 💀 Download: ~0.48 Mbps (Critical)
- 💀 Upload: ~0.1 Mbps (Critical)
- 💀 Ping: ~488.6 ms (Critical)
- 💀 Packet Loss: 38.41% (Critical)
- 🤖 AI Diagnosis: "Severe network connectivity issues. Internet is almost completely unusable..."
- 🚨 **Emergency:** Technical support must be contacted immediately

---

<img width="2233" height="1325" alt="Screenshot 2026-01-11 201026" src="https://github.com/user-attachments/assets/a13c1cbf-3bdf-44ae-8bdf-ae469611d5f8" />

### 🟣 Network Congestion - High Traffic
Performance degradation during peak usage hours. Emphasizes this is a temporary condition.

**Features:**
- 🟣 Download: ~35.68 Mbps (Yellow)
- 🟣 Upload: ~16.49 Mbps (Yellow)
- 🟣 Ping: ~58.9 ms (Yellow)
- 🟣 Packet Loss: 3.03% (Yellow)
- 🤖 AI Diagnosis: "Performance degradation due to network congestion. This is typically normal during peak hours like evenings..."
- ⏰ Recommendation: Better performance available outside peak hours

---

<img width="2152" height="1299" alt="Screenshot 2026-01-11 201003" src="https://github.com/user-attachments/assets/892d3a52-87b2-4949-80a8-094ae27f2a96" />

### AI Diagnosis System - In Action
Intermediate screen shown while the AI model analyzes network metrics. Demonstrates the intelligent analysis happening in the background.

**AI Analysis Process:**
1. Collecting network metrics
2. Sending data to AI service
3. Performing intelligent analysis (identifying problem source)
4. Interpreting results
5. Generating actionable recommendations

> **Note:** In demo environment, AI service errors are sometimes simulated to show how error management would work in real systems.

---

## 📊 Real-Time Network Metrics

The following core metrics are calculated and displayed for each scenario:

### Download Speed (Mbps)
```
🟢 Excellent: > 50 Mbps
🟡 Acceptable: 10-50 Mbps
🔴 Poor: < 10 Mbps
```

### Upload Speed (Mbps)
```
🟢 Excellent: > 20 Mbps
🟡 Acceptable: 5-20 Mbps
🔴 Poor: < 5 Mbps
```

### Ping - Latency (ms)
```
🟢 Low: < 50 ms
🟡 Medium: 50-150 ms
🔴 High: > 150 ms
```

### Packet Loss (%)
```
🟢 Normal: < 2%
🟡 Warning: 2-10%
🔴 Critical: > 10%
```

Metrics are presented with **color codes** to enhance user experience. This allows users to quickly understand connection status even without technical knowledge.

---

## ⚠️ Status Detection & Alert Mechanism

The system analyzes metrics to generate an overall status message:

| Status | Icon | Description |
|-------|------|----------|
| **🟢 Connection Healthy** | ✅ | All systems operating normally |
| **🟡 Attention Required** | ⚠️ | Performance degradation detected |
| **🔴 Issue Detected** | ❌ | Serious problem, intervention required |

These alerts provide an **at-a-glance** summary of network quality and clearly indicate the level of intervention needed.

---

## 🔍 AI Diagnosis System Details

The AI Diagnosis System evaluates network metrics together to **identify the probable source** of the problem.

### Analysis Criteria

```python
def analyze_network(metrics):
    """
    AI answers these questions:
    1. Is the issue from home devices?
    2. Is there an infrastructure problem?
    3. Which metric is most problematic?
    4. What should the user do?
    """
```

### Example AI Outputs

**Normal Connection Scenario:**
```
"Network metrics are in excellent condition. Download speed 100+ Mbps, 
upload speed around 50 Mbps, ping very low (15ms), and no packet loss. 
Your system is performing optimally. No intervention required."
```

**Modem Issue Scenario:**
```
"Modem-level issue detected. Download speed below normal at 14.74 Mbps, 
ping high at 78.6 ms, and 4.56% packet loss present. This issue stems 
from your modem or home devices, not infrastructure. Modem should be 
restarted, and if problem persists, modem replacement may be necessary."
```

**Infrastructure Failure Scenario:**
```
"Serious infrastructure issue detected. Possible fiber cable damage or 
base station problem. Download speed only 4.7 Mbps, ping very high at 
235 ms, and 15.66% packet loss. This level of problem cannot be resolved 
by the user. Technical team has been automatically notified and field 
team has been dispatched."
```

> 💡 **Note:** Some demo scenarios intentionally simulate situations where the external AI service cannot respond, demonstrating **error management scenarios**.

---

## 💡 Recommended Actions

Based on diagnosis results, the system provides **actionable recommendations**:

### 🏠 For Home Device Issues
- 📡 Use **Ethernet cable** instead of WiFi
- 🔄 **Restart modem** (wait 30 seconds)
- 🔧 Check for modem **firmware updates**
- 📍 **Relocate router** to a better position
- 🔌 Request **hardware replacement** if needed

### 🏗️ For Infrastructure Issues
- ✅ Technical team **automatically notified**
- 🚗 Field team **dispatched**
- ⏱️ Estimated intervention time: **2-4 hours**
- 📱 You will be **notified via SMS** about progress
- 📞 For emergencies: **Technical support hotline: 444 0 XXX**

### ✅ No Issues
- 🎉 **Your network is healthy**
- 🔍 **No action required**
- 🔄 Continue **regular maintenance**
- 📊 **Test again** when needed

This section helps users clearly understand **what they need to do**.

---

## 🎓 Demo Scope & Limitations

This project is a **demonstration application**.

### ✅ Demo Features
- All network data is **simulated**
- No real network measurements are performed
- Purpose is to demonstrate **interface, analysis logic, and user experience**

### 🎯 Use Cases
- 📚 **Educational** purposes
- 🎤 **Presentations** and demos
- 🧪 **Conceptual prototype** work
- 🎨 **UI/UX** design reference
- 🏆 **Portfolio** project

### 🔮 Production Enhancements
For production use, the following should be added:
- 📡 Real network measurement tools (ping, speedtest)
- 🗄️ Database integration (PostgreSQL, MongoDB)
- 👥 User authentication system
- 📊 Historical data analysis and trend tracking
- 📱 Mobile application (React Native)
- 🔔 Push notification service
- 📈 Detailed reporting and dashboards
- 🔐 API security and rate limiting
- 🌍 Multi-language support

---

## ⭐ Star This Project

If you find this project useful, please consider giving it a star on GitHub! It helps others discover the project and motivates continued development.

[![GitHub stars](https://img.shields.io/github/stars/emregumusai/AI-Network-Optimizer?style=social)](https://github.com/emregumusai/AI-Network-Optimizer/stargazers)

Your support is greatly appreciated! 🙏

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** this repository
2. Create a new **branch** (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'feat: Add amazing feature'`)
4. **Push** your branch (`git push origin feature/amazing-feature`)
5. Open a **Pull Request**

---

## �‍💻 Author

<div align="center">

### Yunus Emre Gumus

**AI & Full-Stack Developer | Network Optimization Enthusiast**

[![GitHub](https://img.shields.io/badge/GitHub-emregumusai-181717?style=for-the-badge&logo=github)](https://github.com/emregumusai)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-emregumusai-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/emregumusai/)
[![Email](https://img.shields.io/badge/Email-yunusemregumusofc@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:yunusemregumusofc@gmail.com)

*Feel free to reach out for collaborations, questions, or feedback!*

</div>

---

## �📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License**.

### What This Means:

- ✅ **Viewing & Learning**: You can view and study the code for educational purposes
- ✅ **Attribution**: You must give appropriate credit to the original author
- ❌ **No Commercial Use**: You cannot use this project for commercial purposes without permission
- ❌ **No Derivatives**: You cannot distribute modified versions of this work
- 📞 **Commercial Licensing**: For commercial use inquiries, contact the author

See the [LICENSE](LICENSE) file for complete license text or visit the [Creative Commons website](https://creativecommons.org/licenses/by-nc-nd/4.0/).

---

<div align="center">

**© 2026 - For Demo Purposes - All Data is Simulated**

Made with ❤️ for Telecommunications Network Optimization

</div>
