import { navigate } from "@reach/router";
import axios from "axios";
import React from "react";
import Form from "../components/Form";

const CreateView = props => {
  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/recipes", data)
      .then(response => {
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div>
      <h1> Create a new recipe</h1>
      <Form 
        onSubmitHandler={onSubmitHandler} />
    </div>
  )
}

export default CreateView;