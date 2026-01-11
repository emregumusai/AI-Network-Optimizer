import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

const StatusIndicator = ({ status = 'healthy' }) => {
  const getStatusConfig = () => {
    switch (status) {
      case 'critical':
        return {
          icon: XCircle,
          color: 'text-red-500',
          bg: 'bg-red-500 bg-opacity-20',
          ring: 'ring-red-500',
          text: 'Sorun Tespit Edildi',
          description: 'Ağ bağlantınızda ciddi sorunlar var'
        };
      case 'warning':
        return {
          icon: AlertTriangle,
          color: 'text-yellow-500',
          bg: 'bg-yellow-500 bg-opacity-20',
          ring: 'ring-yellow-500',
          text: 'Dikkat Gerekli',
          description: 'Bağlantı kalitesi beklenenin altında'
        };
      case 'healthy':
      default:
        return {
          icon: CheckCircle2,
          color: 'text-green-500',
          bg: 'bg-green-500 bg-opacity-20',
          ring: 'ring-green-500',
          text: 'Bağlantı Sağlıklı',
          description: 'Tüm sistemler normal çalışıyor'
        };
    }
  };

  const config = getStatusConfig();
  const Icon = config.icon;

  return (
    <div className="glass-card text-center animate-fade-in">
      <div className="flex flex-col items-center">
        <div className={`relative ${config.bg} p-6 rounded-full mb-4`}>
          <div className={`absolute inset-0 rounded-full ${config.ring} ring-4 ring-opacity-30 animate-pulse-slow`} />
          <Icon className={`w-16 h-16 ${config.color} relative z-10`} />
        </div>
        
        <h2 className={`text-2xl font-bold ${config.color} mb-2`}>
          {config.text}
        </h2>
        
        <p className="text-gray-300 text-sm">
          {config.description}
        </p>
      </div>
    </div>
  );
};

export default StatusIndicator;
