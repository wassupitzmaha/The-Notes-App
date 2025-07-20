import Note from "../../models/Note.js"

export async function getAllNotes(req, res) {
    try {
      const notes = await Note.find()
      res.status(200).json(notes)
    } catch (error) {
      console.error("error in getALlNotes controller", error)
      res.status(500).json({message:"internal server error"})
      
    }
 }
export async function createNote(req, res) {
    try {

      const { title, content } = req.body
      console.log(title, content)
      const note = new Note ({ title, content})
      const savedNote = await note.save()
      res.status(201).json(savedNote)

    } catch (error) {
      console.error("error in createNote controller", error)
      res.status(500).json({message:"internal server error", error})
      
    }
 } 

 export async function updateNote(req, res) {
   try {
      const {title, content} = req.body
      const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title, content}, 
         {
            new:true,
         }
      )
      if(!updatedNote) return res.status(404).json({message: "Note not found"})
      res.status(200).json({updatedNote})
   } catch (error) {
      console.error("error in updateNote controller", error)
      res.status(500).json({message:"internal server error", error})
   }

 } 
 export function deleteNote(req, res) {
    res.status(200).json({message:"Note deleted sucessfully"})

}