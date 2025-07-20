import React from 'react'
import {Route, Routes} from "react-router"
import HomePage from "../pages/HomePage"
import CreatePage from '../pages/CreatePage'
import NoteDetailPage from '../pages/NoteDetailPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <button onClick= {() => toast.error("why did you just click me, let me sleep")}>
        Click Me
      </button>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />


      </Routes>
    </div>
  )
}

export default App
