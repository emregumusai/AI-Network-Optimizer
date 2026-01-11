import React, { useState, useEffect } from 'react';
import { Download, Upload, Activity, PackageX } from 'lucide-react';
import StatusIndicator from './StatusIndicator';
import MetricsCard from './MetricsCard';
import AIDiagnosis from './AIDiagnosis';
import ActionPanel from './ActionPanel';
import WorkOrderPanel from './WorkOrderPanel';
import ScenarioButtons from './ScenarioButtons';
import { getNetworkStatus, diagnoseNetwork, createWorkOrder } from '../services/api';

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);
  const [diagnosis, setDiagnosis] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentScenario, setCurrentScenario] = useState('normal');
  const [workOrder, setWorkOrder] = useState(null);
  const [overallStatus, setOverallStatus] = useState('healthy');

  // Load initial data
  useEffect(() => {
    handleScenarioChange('normal');
  }, []);

  const handleScenarioChange = async (scenarioId) => {
    setLoading(true);
    setCurrentScenario(scenarioId);
    setWorkOrder(null);

    try {
      // Get network metrics
      const statusResponse = await getNetworkStatus(scenarioId);
      const newMetrics = statusResponse.metrics;
      const status = statusResponse.status;
      
      setMetrics(newMetrics);
      setOverallStatus(status);

      // Get AI diagnosis
      const diagnosisResponse = await diagnoseNetwork({
        download_mbps: newMetrics.download_mbps,
        upload_mbps: newMetrics.upload_mbps,
        ping_ms: newMetrics.ping_ms,
        packet_loss_percent: newMetrics.packet_loss_percent,
        scenario: scenarioId
      });

      setDiagnosis(diagnosisResponse.diagnosis);
      setRecommendations(diagnosisResponse.recommendations || []);

      // Create work order if infrastructure issue
      if (diagnosisResponse.issue_type === 'infrastructure') {
        const orderResponse = await createWorkOrder({
          issue_description: newMetrics.description_tr,
          issue_type: 'infrastructure',
          metrics: newMetrics
        });
        setWorkOrder(orderResponse.work_order);
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      setDiagnosis('Bağlantı hatası. Lütfen backend sunucusunun çalıştığından emin olun.');
    } finally {
      setLoading(false);
    }
  };

  const getMetricStatus = (type, value) => {
    switch (type) {
      case 'download':
        if (value < 10) return 'critical';
        if (value < 30) return 'warning';
        return 'good';
      case 'upload':
        if (value < 5) return 'critical';
        if (value < 15) return 'warning';
        return 'good';
      case 'ping':
        if (value > 150) return 'critical';
        if (value > 60) return 'warning';
        return 'good';
      case 'packet_loss':
        if (value > 10) return 'critical';
        if (value > 2) return 'warning';
        return 'good';
      default:
        return 'good';
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 gradient-text">
          AI Network Optimizer
        </h1>
        <p className="text-gray-300 text-lg">
          Yapay Zeka Destekli Kendini Optimize Eden Ağ Sistemi
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Gemini AI ile desteklenen proaktif ağ izleme ve tanılama sistemi
        </p>
      </div>

      {/* Scenario Selection */}
      <ScenarioButtons 
        onScenarioChange={handleScenarioChange}
        currentScenario={currentScenario}
        loading={loading}
      />

      {/* Status Indicator */}
      {metrics && (
        <div className="mb-8">
          <StatusIndicator status={overallStatus} />
        </div>
      )}

      {/* Metrics Cards */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricsCard
            title="İndirme Hızı"
            value={metrics.download_mbps}
            unit="Mbps"
            icon={Download}
            status={getMetricStatus('download', metrics.download_mbps)}
          />
          <MetricsCard
            title="Yükleme Hızı"
            value={metrics.upload_mbps}
            unit="Mbps"
            icon={Upload}
            status={getMetricStatus('upload', metrics.upload_mbps)}
          />
          <MetricsCard
            title="Ping (Gecikme)"
            value={metrics.ping_ms}
            unit="ms"
            icon={Activity}
            status={getMetricStatus('ping', metrics.ping_ms)}
          />
          <MetricsCard
            title="Paket Kaybı"
            value={metrics.packet_loss_percent}
            unit="%"
            icon={PackageX}
            status={getMetricStatus('packet_loss', metrics.packet_loss_percent)}
          />
        </div>
      )}

      {/* AI Diagnosis */}
      <div className="mb-8">
        <AIDiagnosis diagnosis={diagnosis} loading={loading} />
      </div>

      {/* Actions and Work Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActionPanel 
          recommendations={recommendations}
          issueType={metrics?.issue_type}
        />
        <WorkOrderPanel workOrder={workOrder} />
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>Demo Amaçlı - Tüm veriler simüle edilmiştir</p>
        <p className="mt-1">© 2026 AI Network Optimizer</p>
      </div>
    </div>
  );
};

export default Dashboard;
