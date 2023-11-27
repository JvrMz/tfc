import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

async function getClasesDia (dia) {

    try {
        const resp = await axios.get(`${baseURL}/dia/${dia}`);
        return resp.data.data;
    } catch (error) {
        return null;
    }
}

export default getClasesDia;
