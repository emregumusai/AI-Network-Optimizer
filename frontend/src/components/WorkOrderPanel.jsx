import React from 'react';
import { Truck, Clock, User, FileText, AlertCircle } from 'lucide-react';

const WorkOrderPanel = ({ workOrder }) => {
  if (!workOrder) {
    return null;
  }

  return (
    <div className="glass-card animate-fade-in border-2 border-orange-500 bg-orange-500 bg-opacity-5">
      <div className="flex items-center mb-4">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl mr-3">
          <Truck className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">Teknik Ekip Görevlendirildi</h3>
          <p className="text-xs text-gray-400">Otomatik İş Emri Oluşturuldu</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between bg-black bg-opacity-30 p-3 rounded-lg">
          <div className="flex items-center">
            <FileText className="w-5 h-5 text-blue-400 mr-3" />
            <span className="text-gray-300 text-sm">İş Emri No:</span>
          </div>
          <span className="font-mono font-bold text-white">{workOrder.id}</span>
        </div>

        <div className="flex items-center justify-between bg-black bg-opacity-30 p-3 rounded-lg">
          <div className="flex items-center">
            <User className="w-5 h-5 text-green-400 mr-3" />
            <span className="text-gray-300 text-sm">Teknisyen:</span>
          </div>
          <span className="font-semibold text-white">{workOrder.technician}</span>
        </div>

        <div className="flex items-center justify-between bg-black bg-opacity-30 p-3 rounded-lg">
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-yellow-400 mr-3" />
            <span className="text-gray-300 text-sm">Tahmini Varış:</span>
          </div>
          <span className="font-semibold text-white">{workOrder.estimated_arrival}</span>
        </div>

        <div className="flex items-center justify-between bg-black bg-opacity-30 p-3 rounded-lg">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
            <span className="text-gray-300 text-sm">Öncelik:</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
            workOrder.priority === 'high' 
              ? 'bg-red-500 text-white' 
              : 'bg-yellow-500 text-white'
          }`}>
            {workOrder.priority === 'high' ? 'Yüksek' : 'Orta'}
          </span>
        </div>
      </div>

      <div className="mt-4 p-4 bg-gradient-to-r from-orange-500 to-red-600 bg-opacity-20 border border-orange-500 border-opacity-30 rounded-lg">
        <p className="text-sm text-white font-medium mb-1">
          📱 Bilgilendirme
        </p>
        <p className="text-xs text-gray-200">
          Teknisyen yola çıktığında SMS ile bilgilendirileceksiniz. Süreç boyunca durumu takip edebilirsiniz.
        </p>
      </div>
    </div>
  );
};

export default WorkOrderPanel;
