import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

async function getUsersInClasses (claseId) {
    
    try {

      const response = await axios.get(`${baseURL}/api/usersclass/${claseId}`);
      return response.data; 
    } catch (error) {
      console.error('Error al obtener usuarios inscritos en la clase', error);
      return [];
    }
  }

export default getUsersInClasses