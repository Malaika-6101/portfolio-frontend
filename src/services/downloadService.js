// src/services/downloadService.js
import API from './api';

export const trackDownload = async () => {
  try {
    const response = await API.post('/resume'); // Matches app.use("/api/resume", resumeRoutes)
    return response.data;
  } catch (error) {
    console.error('Error tracking download:', error);
    throw error.response?.data || error.message;
  }
};