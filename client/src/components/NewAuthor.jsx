import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const NewAuthor = ({allAuthors, setAllAuthors}) => {
    const [authorName, setAuthorName] = useState("");
    const [ errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const newAuthorhandler = e => {
        e.preventDefault();
        const newAuthor = {
            authorName,
        }
        axios.post("http://127.0.0.1:8000/api/authors", newAuthor)
        .then( res => {
            setAllAuthors([...allAuthors, res.data])
            navigate("/authors")
        }
            )
        .catch( err => {
            const errArray = [];
            for (const key of Object.keys(err.response.data.errors)){
                errArray.push(err.response.data.errors[key].message)
            }
            setErrors(errArray);
        })

    }

    return(
        <div className="container w-25 p-3">
            <Link to="/authors">Home</Link>
            <p className="text-warning">Add new Author:</p>
            <form onSubmit={newAuthorhandler}>
                <div style={{color: "red"}}>
                {
                        errors.map( (err, idx) => {
                            return(
                                <p key={idx}>{err}</p>
                            )
                        })
                    }
                </div>
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

export default NewAuthor;