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

export const getAutosCita = async (req, res) => {
    try {
        const [response] = await pool.query("SELECT ag.idCita, a.placa, a.marca, a.modelo, ag.fecha, a.img, t.nombre FROM agendarcita ag INNER JOIN auto a ON ag.idAuto=a.idAuto INNER JOIN taller t ON ag.idTaller=t.idTaller WHERE a.catalogo=0");
        res.json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const getAutoCita = async (req, res) => {
    try {
        const id = req.params.id;
        const [response] = await pool.query("SELECT ag.idCita, ag.idAuto, a.placa, a.marca, a.modelo, ag.fecha, a.img, t.nombre, t.telefono, t.email FROM agendarcita ag INNER JOIN auto a ON ag.idAuto=a.idAuto INNER JOIN taller t ON ag.idTaller=t.idTaller WHERE ag.idCita=?", [id]);
        res.json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

export const guardarReporte = async (req, res) => {
    try {
        const { idCita, condicion, fecha, vender, idAuto } = req.body;
        const [response] = await pool.query("INSERT INTO reporte (idCita, condicion, fecha, vender) VALUE(?,?,?,?)", [ idCita, condicion, fecha, vender ]);
        console.log("Primero",response);
        
        const [response2] = await pool.query("UPDATE auto SET catalogo=? WHERE idAuto=?", [ vender, idAuto ]);    
        console.log(response2);

        res.json(response2);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}