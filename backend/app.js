import express from "express";
import cors from "cors";
import db from "./database/db.js";
import router from "./routes/routes.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/notes", router);

try {
    await db.authenticate();
    console.log("Conexión buenarda");
} catch (error) {
   console.log(`Error: ${error}`); 
}

app.get("/", (req, res) => {
    res.send("Hola mundo")
})

app.listen(PORT, () => {
   console.log("Servidor 10/10");
})