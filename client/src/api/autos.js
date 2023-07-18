import axios from "axios";

export const verTodosLosAutos = async () => {
    const response = await axios.get("http://localhost:3001/verautos");
    return response.data;
}