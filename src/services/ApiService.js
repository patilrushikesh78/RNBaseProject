import axios from 'axios';
import { BASE_URL } from '@env'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

class ApiService {
  constructor() {
    console.log('ApiService initialized with BASE_URL:', BASE_URL);
    
    this.api = axios.create({
      baseURL: BASE_URL,
      timeout: 10000, 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.api.interceptors.request.use(
      async (config) => {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        console.log('Request:', {
          url: config.url,
          method: config.method,
          headers: config.headers,
          data: config.data,
          params: config.params,
        });

        return config;
      },
      (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
      }
    );

    this.api.interceptors.response.use(
      (response) => {
        console.log('Response:', {
          url: response.config.url,
          method: response.config.method,
          headers: response.config.headers,
          data: response.data,
          status: response.status,
        });

        return response;
      },
      (error) => {
        if (error.response) {
          console.error('Response Error:', {
            url: error.response.config.url,
            method: error.response.config.method,
            headers: error.response.config.headers,
            data: error.response.data,
            status: error.response.status,
          });

          if (error.response.status === 401) {
            console.error('Unauthorized! Redirect to login...');
          }
        } else {
          console.error('Response Error:', error.message);
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
