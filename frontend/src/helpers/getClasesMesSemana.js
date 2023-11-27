import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;

async function getClasesMesSemana (mes, semana) {

    try {
        const resp = await axios.get(`${baseURL}/mes/${mes}/semana/${semana}`);
        return resp.data.data;
    } catch (error) {
        return null;
    }
}

export default getClasesMesSemana;
