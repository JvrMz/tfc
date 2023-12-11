import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

async function getClasesSemana (semana) {

    try {
        const resp = await axios.get(`${baseURL}/api/semana/${semana}`);
        return resp.data.data;
    } catch (error) {
        return null;
    }
}

export default getClasesSemana;
