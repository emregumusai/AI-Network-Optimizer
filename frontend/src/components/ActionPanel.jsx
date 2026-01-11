import React from 'react';
import { Lightbulb, Home, Building2, CheckCircle } from 'lucide-react';

const ActionPanel = ({ recommendations = [], issueType }) => {
  const getIcon = (index) => {
    const icons = [Lightbulb, CheckCircle, Home, Building2];
    const Icon = icons[index % icons.length];
    return Icon;
  };

  const getContainerStyle = () => {
    if (issueType === 'infrastructure') {
      return 'border-red-500 bg-red-500 bg-opacity-5';
    } else if (issueType === 'local') {
      return 'border-yellow-500 bg-yellow-500 bg-opacity-5';
    }
    return 'border-green-500 bg-green-500 bg-opacity-5';
  };

  const getHeaderStyle = () => {
    if (issueType === 'infrastructure') {
      return 'text-red-400';
    } else if (issueType === 'local') {
      return 'text-yellow-400';
    }
    return 'text-green-400';
  };

  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  return (
    <div className={`glass-card animate-fade-in border-2 ${getContainerStyle()}`}>
      <div className="flex items-center mb-4">
        <Lightbulb className={`w-6 h-6 ${getHeaderStyle()} mr-3`} />
        <h3 className="text-lg font-bold text-white">Önerilen Aksiyonlar</h3>
      </div>

      <div className="space-y-3">
        {recommendations.map((recommendation, index) => {
          const Icon = getIcon(index);
          return (
            <div 
              key={index}
              className="flex items-start bg-black bg-opacity-30 p-4 rounded-lg hover:bg-opacity-40 transition-all duration-200"
            >
              <div className="flex-shrink-0 mt-1">
                <Icon className="w-5 h-5 text-blue-400" />
              </div>
              <p className="ml-3 text-gray-200 text-sm leading-relaxed">
                {recommendation}
              </p>
            </div>
          );
        })}
      </div>

      {issueType === 'local' && (
        <div className="mt-4 p-3 bg-blue-500 bg-opacity-10 border border-blue-500 border-opacity-30 rounded-lg">
          <p className="text-xs text-blue-300">
            💡 İpucu: Bu önerileri uyguladıktan sonra tekrar test edebilirsiniz
          </p>
        </div>
      )}
    </div>
  );
};

export default ActionPanel;
