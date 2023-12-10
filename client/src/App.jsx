import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar'
import DisplayAllBooks from './components/DisplayAllBooks'
import DisplayOneBook from './components/DisplayOneBook'
import BookForm from './components/BookForm'
import EditOneBook from './components/EditOneBook'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<DisplayAllBooks />}></Route>
        <Route path="/books/create" element={<BookForm />}></Route>
        <Route path="/books/:id" element={<DisplayOneBook />}></Route>
        <Route path="/books/edit/:id" element={<EditOneBook />}></Route>
      </Routes>
    </>
  )
}

export default App
