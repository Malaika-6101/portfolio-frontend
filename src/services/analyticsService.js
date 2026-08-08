// src/services/visitorService.js
import API from './api';

export const trackVisitor = async () => {
  try {
    // Matches your backend endpoint: POST /api/stats
    const response = await API.post('/stats');
    return response.data;
  } catch (error) {
    console.error('Error tracking visitor:', error);
  }
};