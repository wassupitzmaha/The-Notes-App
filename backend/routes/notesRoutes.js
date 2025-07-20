import express from "express"
import { getAllNotes} from "../controllers/notesController.js"

const router = express.Router();

router.get("/", getAllNotes) 

router.post("/", (req, res) => {
   res.status(201).json({message:"note created sucessfully"})
})

router.put("/", (req, res) => {
    res.status(200).json({message:"note updated sucessfully"})

 })

router.delete("/", (req, res) => {
    res.status(200).json({message:"Note deleted sucessfully"})

})

export default router;







