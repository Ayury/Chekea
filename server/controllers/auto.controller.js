import { pool } from "../db.js";
import multer from "multer";
import path from "path";


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
        const [result] = await pool.query("SELECT placa, marca, modelo, anio, kilometraje, transmision, detalles, nombre, apellido, email, telefono FROM auto a INNER JOIN usuario u ON u.idUsuario=a.propietario WHERE idAuto=?", [id]);
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}

const storage = multer.diskStorage({
    destination: "../client/public/carImage",
    filename: (req, file, cb) => {
        return cb(null, 
 `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function(req, file, cb) {
        if(!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
            req.fileValidationError = "Only the image file is allowed";
            return cb(new Error("Only the image file is allowed"), false);
        }
        cb(null, true);
    },
});

// Inserta un auto y su propietario (Se reciben los valores por el Body)
export const insertAuto = async (req, res) => {
    // Configurar multer para guardar los archivos en la carpeta 'uploads'
    try{

        const { placa, marca, modelo, anio, kilometraje, transmision, id_propietario, detalles, imagen } = req.body;
        console.log("Voy a guardar la imagen", imagen)
        upload.single(imagen)
        
        // const [result] = await pool.query("INSERT INTO auto (placa, marca, modelo, anio, kilometraje, transmision, propietario, catalogo, detalles) VALUE(?,?,?,?,?,?,?,0,?)", [ placa, marca, modelo, anio, kilometraje, transmision, id_propietario, detalles ]);
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}

// Autos de un dueño
export const autosPropietario = async (req, res) => {
    try{
        const id = req.params.id;
        const [result] = await pool.query("SELECT a.* FROM auto a LEFT JOIN agendarcita ag ON a.idAuto=ag.idAuto WHERE a.propietario=? AND ag.idAuto IS NULL", [id]);
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}

// Auto con Cita
export const autosPropietarioConCita = async (req, res) => {
    try{
        const id = req.params.id;
        const [result] = await pool.query("SELECT a.* FROM auto a INNER JOIN agendarcita ag ON a.idAuto=ag.idAuto WHERE a.propietario=?", [id]);
        res.json(result);
    }catch(err){
        res.status(500).json({error: err})
    }
}