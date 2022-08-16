import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const ViewAuthor = (props) => {

  const [author, setAuthor] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/authors/" + props.id)
      .then((res) => setAuthor(res.data))
      .catch((err) => Navigate("/error"));
  }, [props.id]);

  return (
    <div className="container mt-5 text-center">
      <h3 className="display-3">{author.name}</h3>
      <p>Number of Books: {author.number_of_books}</p>
      <div className="d-inline-flex mt-3">
        <Link to={`/edit/${author._id}`} className="btn btn-primary mr-1"> Update</Link>
        <DeleteButton authorId={author._id} successCallback={() => Navigate('/')}/>
      </div>
    </div>
  )
}

export default ViewAuthor
