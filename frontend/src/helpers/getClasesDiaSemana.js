import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

async function getClasesDiaSemana () {

    try {
        const resp = await axios.get(`${baseURL}/api/semana/2/dia/lunes`);
        return resp.data.data;
    } catch (error) {
        return null;
    }
}

export default getClasesDiaSemana;
