import axios from 'axios'

export const login = async ( values ) => {
    const result = await axios.post("http://localhost:3001/login", values);
    return result.data;
}

export const registrar = async ( values ) => {
    const result = await axios.post("http://localhost:3001/registrar", values);
    return result.data;
}