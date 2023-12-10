import React from 'react';
import { useState, useEffect} from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"


const DisplayAllBooks = () => {

    const [books, setBooks] = useState([])
    const navigate = useNavigate()

    useEffect (() => {
        axios.get("http://localhost:8000/api/books") // GET ALL
        .then(res => {
            setBooks(res.data)
        })
        .catch(err => console.log(err))
    },[])

    const viewHandler = e => {
        navigate(`/books/${e.target.value}`) // NAVIGATE TO DISPLAY ONE
    }

    return (    
        <div >
            <h1>All Books</h1>
            <div className="d-flex flex-wrap">
            {
                books.map((book, index) => { // ITERATE ON ARRAY OF OBJECTS
                    return (
                        <div key={index} className="border border-secondary rounded p-4 m-4"> 
                            <p>Title: {book.title}</p>
                            <p>Author: {book.author}</p>
                            <p>Pages: {book.pages}</p>
                            <p>Publish Year: {book.publishYear}</p>
                            <p>Genre: {book.genre}</p>
                            <button onClick={viewHandler} value={book._id} className="btn btn-outline-primary btn-sm">View Book</button><br></br>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}   
export default DisplayAllBooks