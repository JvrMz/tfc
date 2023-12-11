import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

async function sendUserClase (userId, claseId) {

  try {
      const response = await axios.post(`${baseURL}/api/userclase`, {
        id_user: userId,
        id_clase: claseId,
      });
  

      if (response) {
        // console.log(response.data.message);
        await updateAforoActual(claseId);
      } 
    } catch (error) {
      // console.error(error);
    }
}

async function updateAforoActual(claseId) {
  try {
      const response = await axios.put(`${baseURL}/api/aforo`, {
          id_clase: claseId,
      });

      if (response) {
          // console.log(response.data.message);
      }
  } catch (error) {
      // Manejar el error
      // console.error(error);
  }
}

export default sendUserClase;