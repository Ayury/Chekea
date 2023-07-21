import axios from "axios";

export const allTalleres = async () => {
    const response = await axios.get("http://localhost:3001/talleres");
    return response.data;
}