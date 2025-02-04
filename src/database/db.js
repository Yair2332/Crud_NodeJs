import mysql from "mysql";

const conexion = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud_nodejs"
})

conexion.connect((e)=>{
    if (e) {
        console.log("Error en la conexion: "+ e);
    }else{
        console.log("Conexion exitosa");
        
    }

    
})

export default conexion;