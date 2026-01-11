import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000, // 60 seconds for AI processing
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getNetworkStatus = async (scenario = 'normal') => {
  const response = await api.get(`/api/network-status?scenario=${scenario}`);
  return response.data;
};

export const diagnoseNetwork = async (metrics) => {
  const response = await api.post('/api/diagnose', metrics);
  return response.data;
};

export const getScenarios = async () => {
  const response = await api.get('/api/scenarios');
  return response.data;
};

export const createWorkOrder = async (orderData) => {
  const response = await api.post('/api/work-orders', orderData);
  return response.data;
};

export const getWorkOrders = async () => {
  const response = await api.get('/api/work-orders');
  return response.data;
};

export default api;
