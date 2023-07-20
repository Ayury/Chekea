import axios from "axios";

export const verTodosLosAutos = async () => {
    const response = await axios.get("http://localhost:3001/auto");
    return response.data;
}

export const verAuto = async (idAuto) => {
    const response = await axios.get(`http://localhost:3001/auto/${idAuto}`);
    return response.data;
}
export const imgAuto = async (idAuto) => {
    const response = await axios.get(`http://localhost:3001/auto/img/${idAuto}`);
    return response.data;
}