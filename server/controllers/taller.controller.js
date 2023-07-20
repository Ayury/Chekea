import { pool } from "../db.js";

export const getAllTaller = async (req, res) => {
    try {
        const [response] = await pool.query("SELECT * from taller");
        res.json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getTaller = async (req, res) => {
    try {
        const id = req.params.id;
        console.log("Si", id)
        const [response] = await pool.query("SELECT * from taller WHERE idTaller=?", [id]);
        res.json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
}