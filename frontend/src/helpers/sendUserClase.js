import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

async function sendUserClase (userId, claseId) {

    try {
        const response = await axios.post(`${baseURL}/userclase`, {
          id_user: userId,
          id_clase: claseId,
        });
    
        const data = response.data;
        console.log(data);
        // Posible usar toast, para mostrar mensaje de registro en clase correcto
        if (response) {
          console.log(data.message);
        } 
      } catch (error) {
        console.error(error);
      }
  }


export default sendUserClase;