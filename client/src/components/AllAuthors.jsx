import React from 'react';
import {Link} from "react-router-dom";
import "../App.css";

const AllAuthors = ({allAuthors, deleteAuthor}) => {
    const deleteHandler = e => {
        const recordId = e.target.id;
        deleteAuthor(recordId);
    }
    return(
        <div className='container w-25 p-3'>
            <Link to={'/authors/new'}>Add an Author</Link>
            <h3>We have quotes by:</h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                { allAuthors.map( record => {
                        return (
                            <tr key={record._id}>
                                <td>{record.authorName}</td>
                                <td> <Link to={`/authors/edit/${record._id}`}>Edit</Link>  | <Link className="fake-link" onClick={deleteHandler} id={record._id}>Remove</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default AllAuthors;