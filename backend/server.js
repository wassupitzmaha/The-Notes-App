import express from "express";

const app = express()

app.get("/api/notes", (req, res) => {
    res.status(200).send("you got 5 notes")
})

app.post("/api/notes", (req, res) => {
    res.status(201).send("you created a note")
})

app.listen(5001, () => {
    console.log("Server started on Port: 5001")
})

