import { pool } from "../db.js";

export const agendarCita = async (req, res) => {
    try {
        const { idUsuario, idAuto, idTaller, fecha } = req.body;
        const [response] = await pool.query("INSERT INTO agendarcita (idUsuario, idAuto, idTaller, fecha) VALUE(?,?,?,?)", [ idUsuario, idAuto, idTaller, fecha ]);
        res.json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
}