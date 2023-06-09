import axios from 'axios';


const instance = axios.create({ baseURL: process.env.RAECT_APP_API })

console.log('process.env.RAECT_APP_API_KEY', process.env.RAECT_APP_API)

instance.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
  }
);

export default {
  getTasks: async () => {
    const result = await instance.get(`/items`);
    return result.data;
  },

  addTask: async (name) => {
    const result = await instance.post(`/items`, { name: name, isComplete: false });
    return result.data;
  },

  setCompleted: async (id, isComplete) => {
    const result = await instance.put(`/items/${id}?isComplete=${isComplete}`);
    return result.data;
  },
  deleteTask: async (id) => {
    const result = await instance.delete(`/items/${id}`);
    return result.data;
  }
};