export function getAllNotes(req, res) {
    res.status(200).send("you jsut fetched the notes")
 }
export function createNote(req, res) {
    res.status(201).json({message:"note created sucessfully"})
 } 

 export function updateNote(req, res) {
    res.status(200).json({message:"note updated sucessfully"})

 } 
 export function deleteNote(req, res) {
    res.status(200).json({message:"Note deleted sucessfully"})

}