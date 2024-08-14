import axios from 'axios';

// Configure the base URL for your API
const API_BASE_URL = 'http://localhost:3000/api'; // Replace with your backend URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiService = {
  getAllEvents: async () => {
    try {
      const response = await apiClient.get('/events/get-all');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  createEvent: async (event) => {
    try {
      const response = await apiClient.post('/events/create-event', event);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  getEventById: async (id) => {
    try {
      const response = await apiClient.get(`/events/get-by-id/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  updateEvent: async (id, event) => {
    try {
      const response = await apiClient.put(`/events/update/${id}`, event);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  deleteEvent: async (id) => {
    try {
      const response = await apiClient.delete(`/events/delete/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default apiService;
