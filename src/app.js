import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import indexRoutes from "./router/rutas.js"; 
import { json } from "stream/consumers";

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(indexRoutes);



app.listen(3000, () => {
  console.log("Escuchando en el puerto 3000");
});
