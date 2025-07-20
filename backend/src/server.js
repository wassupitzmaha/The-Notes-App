import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from 'dotenv';
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config()

console.log(process.env.MONGO_URI);

const app = express()

const PORT = process.env.PORT || 5001



app.use(express.json()) //middleware will parse the json bodies: req.body

app.use(rateLimiter)

//simple custom middelware
//app.use((req, res, next) => {
    //console.log(`req method is ${req.method} & req url is ${req.url}`)
    //next()
//})

app.use("/api/notes", notesRoutes)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT)
    })
})


