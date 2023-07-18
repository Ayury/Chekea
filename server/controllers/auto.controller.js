import { pool } from "../db.js";

// Obtener todos los autos
export const getAllAuto = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM auto");
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}

// Obtener un auto por el id (Id se recibe por la URL)
export const getAuto = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await pool.query("SELECT * FROM auto WHERE id_auto=?", [id]);
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}

// Inserta un auto (Se reciben los valores por el Body)
export const insertAuto = async (req, res) => {
    try{
        const { marca, placa, color, puerta, tipo } = req.body;
        const [result] = await pool.query("INSERT INTO auto (marca, placa, color, puerta, tipo) VALUE(?,?,?,?,?)", [ marca, placa, color, puerta, tipo ]);
        // res.json({
        //     idDelRecienIngresado: result.insertId
        // });
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}

// Actualizar un auto
export const updateAuto = async (req, res) => {
    try{
        const { placa, color, puerta } = req.body;
        const id = req.params.id;
        const result = await pool.query("UPDATE auto SET placa=?, color=?, puertas=? WHERE id_auto=?", [placa, color, puerta, id]);
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}

// Eliminar un auto
export const deleteAuto = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await pool.query("DELETE FROM auto WHERE id_auto=?", [id]);
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}
