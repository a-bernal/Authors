import React, {useState, useEffect} from 'react';
import { useNavigate, useParams, Link} from 'react-router-dom';
import axios from "axios";

const EditAuthor = ({allAuthors, setAllAuthors}) => {
    const [authorName, setAuthorName] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect( () => {
        axios.get(`http://127.0.0.1:8000/api/authors/${id}`)
            .then(res => {
                setAuthorName(res.data.authorName);
            })
            .catch( err => console.log(err));
    }, [id])

    const updateAuthorHandler = e => {
        e.preventDefault();
        const editAuthor = {
            authorName,
        }
        axios.patch(`http://127.0.0.1:8000/api/authors/${id}`, editAuthor)
            .then( res => {
                const updatedAuthor = res.data;
                const updatedAllAuthors = allAuthors.map( record => {
                    return record._id === updatedAuthor._id ? updatedAuthor : record;
                })
                setAllAuthors(updatedAllAuthors);
                navigate("/authors");
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="container w-25 p-3">
            <Link to="/authors">Home</Link>
            <p className="text-warning">Edit Author:</p>
            <form onSubmit={updateAuthorHandler}>
                <div className="form-group">
                    <label htmlFor="authorName">Name:</label>
                    <input type="text" className="form-control " name="authorName" id="authorName" value={authorName} onChange={e => setAuthorName(e.target.value)} />
                </div>
                <div>
                    <button className="btn btn-primary" >Submit</button>
                </div>
            </form>
        </div>
    );

}

export default EditAuthor;