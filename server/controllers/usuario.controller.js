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

// Obtener un usuario por su ID
export const getUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id;
        const [result] = await pool.query("SELECT id_usuario, nombre, apellido, email, telefono FROM usuario WHERE id_usuario=?", [id_usuario]);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

// Esto puede ser el Loggin
export const Login = async (req, res) => {
    try{
        const { email, contra } = req.body;
        const [result] = await pool.query("SELECT id_usuario, nombre, apellido, email, telefono FROM usuario WHERE email=? AND contrasena=?", [email, contra]);
        if(result.length > 0){
            res.json(result[0]);
        } else {
            res.status(300).json({error: "No se encontró el usuario"});
        }
    }catch(err){
        res.status(500).json({error: err})
    }
}

// Registrar un usuario
export const Registrar = async (req, res) => {
    try{
        const { nombre, apellido, email, contra, telefono } = req.body;
        const [result] = await pool.query("INSERT INTO usuario (nombre, apellido, email, contrasena, telefono) VALUE(?,?,?,?,?)", [nombre, apellido, email, contra, telefono]);
        res.json(result);    
    
    }catch(err){
        res.status(500).json({error: err})
    }
}