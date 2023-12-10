import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";

const DisplayOneBook = () => {

    const [book, setBook ] = useState({}) // PER BOOK ITEM
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/books/${id}`) // GET ONE
        .then(res => {
            setBook(res.data)
        })
        .catch(err => console.log(err))
    },[])

    const editHandler = e => {
        navigate(`/books/edit/${e.target.value}`) // NAVIGATE TO EDIT ONE
    }

    const deleteHandler = e => {
        axios.delete(`http://localhost:8000/api/books/${id}`) // DELETE ONE
        .then(res => {
            navigate("/")
            .catch(err => console.log(err))
        })
    }

    return (
        <div>
            <h1>Book Title</h1>
            <div className="border border-secondary rounded col-md-6 offset-1 p-4"> 
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <p>Pages: {book.pages}</p>
                <p>Publish Year: {book.publishYear}</p>
                <p>Genre: {book.genre}</p>
                <button onClick={editHandler} value={book._id} className="btn btn-outline-primary btn-sm">Edit Book</button> &nbsp; &nbsp;
                <button onClick={deleteHandler} value={book._id} className="btn btn-outline-danger btn-sm">Delete Book</button><br></br>
            </div>
        </div>
    )
}

export default DisplayOneBook