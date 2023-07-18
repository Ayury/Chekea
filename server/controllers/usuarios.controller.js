import { pool } from "../db.js";

// Creando la función para cuando se quieran consultar todos los usuarios en la base de datos
export const getUsuarios = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM usuario");
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}

// Esot puede ser el Loggin
export const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const [result] = await pool.query("SELECT (name, username, id_usuario, location) FROM usuario WHERE email=? AND password=?", [email, password]);
        if(result.length > 0){
            res.json(result);
        } else {
            res.status(300).json({error: "No se encontró el usuario"});
        }
    }catch(err){
        res.status(500).json({error: err})
    }
}