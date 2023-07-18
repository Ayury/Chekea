import React, { createContext, useContext, useState } from 'react'
import { login } from '../api/login';
import { useNavigate } from 'react-router-dom';

export const useChekea = () => {
    const context = useContext(ChekeaContext);
    if(!context){
        throw new Error("No existe el contexto");
    }

    return context;
}

export const ChekeaContext = createContext();

export const ChekeaContextProvider = ({children}) => {
    
    const [usuarioLogeado, setUsuarioLogeado] = useState();
    const navigate = useNavigate();

    const logear = async (values) => {
        try {
            const response = await login(values);
            setUsuarioLogeado(response);
            return 1;
        } catch (error) {
            return 0;
        }
    }

    const deslogear = () => {
        setUsuarioLogeado(null);
        navigate("/");
    }
    
    return(
        <ChekeaContext.Provider value={{usuarioLogeado, logear, deslogear}}>
            {children}
        </ChekeaContext.Provider>
    )
}
