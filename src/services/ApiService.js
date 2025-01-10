import axios from 'axios';
import { BASE_URL } from '@env'; 

class ApiService {
  constructor() {
    console.log("ApiService : ",BASE_URL);
    
    this.api = axios.create({
      baseURL: BASE_URL,
      timeout: 10000, 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use(
      (config) => {
        const token = '';
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          console.error('Unauthorized! Redirect to login...');
        }
        return Promise.reject(error);
      }
    );
  }

  get(endpoint, params = {}) {
    return this.api.get(endpoint, { params });
  }

  post(endpoint, data = {}) {
    return this.api.post(endpoint, data);
  }

  put(endpoint, data = {}) {
    return this.api.put(endpoint, data);
  }

  delete(endpoint, params = {}) {
    return this.api.delete(endpoint, { params });
  }
}

const apiService = new ApiService();
export default apiService;
