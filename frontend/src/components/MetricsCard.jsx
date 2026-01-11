import React from 'react';
import { TrendingUp, TrendingDown, ArrowUp, ArrowDown } from 'lucide-react';

const MetricsCard = ({ title, value, unit, icon: Icon, status = 'good', trend }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'critical':
        return 'from-red-500 to-pink-500';
      case 'warning':
        return 'from-yellow-500 to-orange-500';
      case 'good':
      default:
        return 'from-green-500 to-emerald-500';
    }
  };

  const getStatusBg = () => {
    switch (status) {
      case 'critical':
        return 'bg-red-500 bg-opacity-20';
      case 'warning':
        return 'bg-yellow-500 bg-opacity-20';
      case 'good':
      default:
        return 'bg-green-500 bg-opacity-20';
    }
  };

  return (
    <div className="glass-card hover:scale-105 transition-transform duration-300 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${getStatusBg()}`}>
          <Icon className={`w-6 h-6 text-white`} />
        </div>
        {trend && (
          <div className={`flex items-center text-sm ${trend > 0 ? 'text-green-400' : 'text-red-400'}`}>
            {trend > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
            <span className="ml-1">{Math.abs(trend)}%</span>
          </div>
        )}
      </div>
      
      <h3 className="text-gray-300 text-sm font-medium mb-2">{title}</h3>
      
      <div className="flex items-baseline">
        <span className={`text-3xl font-bold bg-gradient-to-r ${getStatusColor()} bg-clip-text text-transparent`}>
          {value}
        </span>
        <span className="text-gray-400 ml-2 text-lg">{unit}</span>
      </div>
      
      <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${getStatusColor()} transition-all duration-500`}
          style={{ width: status === 'good' ? '100%' : status === 'warning' ? '60%' : '30%' }}
        />
      </div>
    </div>
  );
};

export default MetricsCard;
