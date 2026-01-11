import React from 'react';
import { Wifi, WifiOff, Router, Cable, Users, AlertCircle } from 'lucide-react';

const ScenarioButtons = ({ onScenarioChange, currentScenario, loading }) => {
  const scenarios = [
    { 
      id: 'normal', 
      label: 'İnternet Normal', 
      icon: Wifi,
      color: 'from-green-500 to-emerald-600',
      description: 'Sağlıklı bağlantı'
    },
    { 
      id: 'slow-wifi', 
      label: 'Yavaş WiFi', 
      icon: Wifi,
      color: 'from-yellow-500 to-orange-500',
      description: 'Sinyal zayıf'
    },
    { 
      id: 'modem-issue', 
      label: 'Modem Sorunu', 
      icon: Router,
      color: 'from-orange-500 to-red-500',
      description: 'Cihaz arızası'
    },
    { 
      id: 'fiber-damage', 
      label: 'Altyapı Arızası', 
      icon: Cable,
      color: 'from-red-500 to-pink-600',
      description: 'Fiber hasar'
    },
    { 
      id: 'congestion', 
      label: 'Ağ Yoğunluğu', 
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      description: 'Trafik fazla'
    },
    { 
      id: 'outage', 
      label: 'Kesinti', 
      icon: WifiOff,
      color: 'from-gray-600 to-gray-800',
      description: 'Ciddi sorun'
    },
  ];

  return (
    <div className="glass-card mb-8 animate-fade-in">
      <div className="flex items-center mb-4">
        <AlertCircle className="w-6 h-6 text-blue-400 mr-3" />
        <h3 className="text-lg font-bold text-white">Demo Senaryoları</h3>
        <span className="ml-3 text-xs text-gray-400 bg-blue-500 bg-opacity-20 px-3 py-1 rounded-full">
          Bir senaryo seçin
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {scenarios.map((scenario) => {
          const Icon = scenario.icon;
          const isActive = currentScenario === scenario.id;
          
          return (
            <button
              key={scenario.id}
              onClick={() => onScenarioChange(scenario.id)}
              disabled={loading}
              className={`
                relative overflow-hidden rounded-xl p-4 transition-all duration-300
                ${isActive 
                  ? `bg-gradient-to-br ${scenario.color} shadow-lg scale-105 ring-2 ring-white ring-opacity-50` 
                  : 'glass hover:scale-105 hover:shadow-xl'
                }
                ${loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <div className="flex flex-col items-center text-center">
                <Icon className={`w-8 h-8 mb-2 ${isActive ? 'text-white' : 'text-gray-300'}`} />
                <span className={`text-sm font-semibold mb-1 ${isActive ? 'text-white' : 'text-gray-200'}`}>
                  {scenario.label}
                </span>
                <span className={`text-xs ${isActive ? 'text-gray-100' : 'text-gray-400'}`}>
                  {scenario.description}
                </span>
              </div>
              
              {isActive && (
                <div className="absolute inset-0 bg-white opacity-10 animate-pulse-slow" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ScenarioButtons;
