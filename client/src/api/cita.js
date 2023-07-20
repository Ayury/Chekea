import axios from "axios";

export const agendarCita = async (values) => {
    const response = await axios.post("http://localhost:3001/cita", values);
    return response.data;
}
