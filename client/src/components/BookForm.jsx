import React, { useState } from 'react'
import axios from 'axios'

const BookForm = () => {

    const [book, setBook] = useState ({
        title: "",
        author: "",
        pages: "",
        publishYear: "",
        genre: ""
    })

    const [errors, setErrors] = useState({})

    const changeHandler = e => {
        setBook({...book, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/books", book)
        .then(res => {
            console.log(res.data)
            setBook({
                title: "",
                author: "",
                pages: "",
                publishYear: "",
                genre: ""
            })
        })
        .catch(err =>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    return (
    <div>
        <h1>Create a Book</h1>
        <form className="col-md-4 offset-4" onSubmit={submitHandler}>
            <div className="mb-3">
                <label htmlFor="title">Title: </label>
                <input type="text" className="form-control" id="title"  name="title" value={book.title} onChange={changeHandler}/>
                {errors.title ? <p className="text-danger">{errors.title.message}</p> : null}
            </div>
            <div className="mb-3">
                <label htmlFor="title">Author: </label>
                <input type="text" className="form-control" id="author" name="author" value={book.author} onChange={changeHandler}/>
                {errors.author ? <p className="text-danger">{errors.author.message}</p> : null}
            </div>
            <div className="mb-3">
                <label htmlFor="pages">Pages: </label>
                <input type="number" className="form-control" id="pages" name="pages" value={book.pages} onChange={changeHandler}/>
                {errors.pages ? <p className="text-danger">{errors.pages.message}</p> : null}
            </div>
            <div className="mb-3">
                <label htmlFor="title">Publish Year: </label>
                <input type="number" className="form-control" id="publishYear" name="publishYear" value={book.publishYear} onChange={changeHandler}/>
                {errors.publishYear ? <p className="text-danger">{errors.publishYear.message}</p> : null}
            </div>
            <div className="mb-3">
                <label htmlFor="genre">Genre: </label>
                <input type="text" className="form-control" id="genre" name="genre" value={book.genre} onChange={changeHandler}/>
                {errors.genre ? <p className="text-danger">{errors.genre.message}</p> : null}
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Create a Book</button>
        </form>
    </div>
    )
}

export default BookForm