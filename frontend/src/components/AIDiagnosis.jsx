import React from 'react';
import { Brain, Loader2, Sparkles } from 'lucide-react';

const AIDiagnosis = ({ diagnosis, loading }) => {
  return (
    <div className="glass-card animate-fade-in border-2 border-blue-500 border-opacity-30">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl mr-4">
          <Brain className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold gradient-text flex items-center">
            AI Tanı Sistemi
            <Sparkles className="w-5 h-5 ml-2 text-yellow-400" />
          </h3>
          <p className="text-sm text-gray-400">Gemini 1.5 Flash ile desteklenmektedir</p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
          <span className="ml-3 text-gray-300">AI analiz yapıyor...</span>
        </div>
      ) : diagnosis ? (
        <div className="bg-black bg-opacity-30 rounded-xl p-6 border border-blue-500 border-opacity-20">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-100 leading-relaxed whitespace-pre-line">
              {diagnosis}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400">
          <Brain className="w-12 h-12 mx-auto mb-3 opacity-50" />
          <p>Analiz için bir senaryo seçin</p>
        </div>
      )}
    </div>
  );
};

export default AIDiagnosis;
