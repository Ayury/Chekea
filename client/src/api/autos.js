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

// Cargar autos registrados de un dueño
export const autosPropietario = async (idUsuario) => {
    const response = await axios.get(`http://localhost:3001/auto/propietario/${idUsuario}`);
    return response.data;
}

export const autosPropietarioConCita = async (idUsuario) => {
    const response = await axios.get(`http://localhost:3001/auto/propietario/cita/${idUsuario}`);
    return response.data;
}

export const imgAutosPropietario = async (idUsuario) => {
    const response = await axios.get(`http://localhost:3001/auto/propietario/img/${idUsuario}`);
    return response.data;
}

// Registrar auto
export const registrarAuto = async (values) => {
    const response = await axios.post("http://localhost:3001/auto", values);
    return response.data;
}