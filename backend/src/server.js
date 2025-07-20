import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from 'dotenv';

dotenv.config()

console.log(process.env.MONGO_URI);

const app = express()
const PORT = process.env.PORT || 5001

app.use("/api/notes", notesRoutes)

connectDB()
 

app.listen(5001, () => {
 console.log("Server started on Port:", PORT)
})
