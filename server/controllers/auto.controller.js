import { pool } from "../db.js";

// Obtener todos los autos
export const getAllAuto = async (req, res) => {
    try{
        const [result] = await pool.query("SELECT * FROM auto WHERE catalogo=1");
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}

// Obtener un auto por el id (Id se recibe por la URL)
export const getAuto = async (req, res) => {
    try{
        const id = req.params.id;
        const [result] = await pool.query("SELECT * FROM auto WHERE idAuto=?", [id]);
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}
// Obtener las imagenes de un auto
// export const getImgAuto = async (req, res) => {
//     try{
//         const id = req.params.id;
//         const [result] = await pool.query("SELECT * FROM auto_imagen WHERE idAuto=?", [id]);
//         res.json(result);
//     }catch(err){
//         res.status(500).json({error: err})
//     }
// }

// Inserta un auto y su propietario (Se reciben los valores por el Body)
export const insertAuto = async (req, res) => {
    try{
        const { placa, marca, modelo, anio, kilometraje, transmision, id_propietario, detalles } = req.body;
        const [result] = await pool.query("INSERT INTO auto (placa, marca, modelo, anio, kilometraje, transmision, propietario, catalogo, detalles) VALUE(?,?,?,?,?,?,?,0,?)", [ placa, marca, modelo, anio, kilometraje, transmision, id_propietario, detalles ]);
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
