import api from './api';

const authService = {
  login: async (username, password) => {
    try {
      const response = await api.post('/auth/login', { username, password });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      throw new Error('Invalid username or password');
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  isLoggedIn: () => {
    return !!localStorage.getItem('token');
  },

  getToken: () => {
    return localStorage.getItem('token');
  }
};

export default authService;
