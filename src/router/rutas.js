import { Router } from "express";
import conexion from "../database/db.js";
import {save} from "../controllers/crud.js";
import {uptade} from "../controllers/crud.js";


const router= Router();

router.get('/', (req, res)=>{
    res.render('index');
})

router.get('/registros', (req, res)=>{
    conexion.query("SELECT * FROM `user`", (error, results)=>{
        try {
            res.render('registros',{resultados:results})
        } catch (error) {
            console.error(error); 
        }
    })
})

router.get('/edit', (req, res)=>{
    res.render('edit');
})

router.get('/create', (req, res)=>{
    res.render('create');
})

router.get('/edit/:id', (req, res)=>{
    const id= req.params.id;
    conexion.query("SELECT * FROM user WHERE id=?",[id], (error, results)=>{
        if(error){
            console.log(error);
            res.redirect('/')
        }else if(results!=null){
            res.render('edit',{results:results[0]})
        }
    })
})



router.post('/save', save)
router.post('/uptade', uptade)

router.get('/delete/:id', (req, res)=>{
    const id= req.params.id;
    conexion.query("DELETE FROM user WHERE id=?",[id], (error, results)=>{
        if(error){
            console.error(error);
            res.redirect('/')
        }else{
            res.redirect('/registros')
        }
    })
})

router.post('/busqueda', (req, res)=>{
    const dni= req.body.busqueda;
    const contiene= ""+dni+"%"
    conexion.query("SELECT * FROM user WHERE documento LIKE ?;",[contiene], (error, results)=>{
        if(error){
            console.error(error);
            res.redirect('/')
        }else{
            res.render('registros', { resultados: results})
        }
    })
})

export default router;