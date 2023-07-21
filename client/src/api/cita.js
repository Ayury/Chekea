import axios from "axios";

export const agendarCita = async (values) => {
    const response = await axios.post("http://localhost:3001/cita", values);
    return response.data;
}

export const getAutosCita = async () => {
    const response = await axios.get("http://localhost:3001/cita");
    return response.data;
}

export const getAutoCita = async (idCita) => {
    const response = await axios.get(`http://localhost:3001/cita/${idCita}`);
    return response.data;
}

export const guardarReporte = async (values) => {
    const response = await axios.post(`http://localhost:3001/reporte/`, values);
    return response.data;
}
