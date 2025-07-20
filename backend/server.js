import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

const app = express()

app.use("/api/notes", notesRoutes)


 

app.listen(5001, () => {
 console.log("Server started on Port: 5001")
})

