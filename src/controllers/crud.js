import { error } from "console";
import conexion from "../database/db.js";

export const save = (req, res)=>{
    const documento= req.body.documento
    const nombre= req.body.nombre
    const apellido= req.body.apellido
    const puesto= req.body.puesto

    conexion.query("INSERT INTO `user` SET ? ",{documento,nombre,apellido,puesto}, (error, results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('/registros')
        }
    }) 
   
}



export const uptade = (req, res)=>{
    const id= req.body.id
    const documento= req.body.documento
    const nombre= req.body.nombre
    const apellido= req.body.apellido
    const puesto= req.body.puesto

    conexion.query("UPDATE `user` SET ? WHERE id=? ",[{documento:documento,nombre:nombre,apellido:apellido,puesto:puesto},id], (error, results)=>{
        if(error){
            console.error(error);
        }else{
            res.redirect('/registros')
        }
    }) 
}
