import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const EditOneBook = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [book, setBook ] = useState({}) // PER BOOK ITEM
    const [errors, setErrors] = useState({})

    useEffect (() => {
        axios.get(`http://localhost:8000/api/books/${id}`) // GET ONE
        .then(res => {
            setBook(res.data)
        })
        .catch(err => console.log(err))
    },[])

    const changeHandler = e => {
        setBook({...book, [e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/books/${id}`, book)
        .then(res => {
            console.log(res.data)
            navigate("/")
        })
        .catch(err =>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

return (
    <div>
        <h1>Edit Book</h1>
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
            <button type="submit" className="btn btn-primary btn-sm">Edit Book</button>
        </form>
    </div>
)

}

export default EditOneBook