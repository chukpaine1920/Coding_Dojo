import React, { useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import Form from "../components/Form";
import axios from "axios";
import { navigate } from "@reach/router";

const EditView = props => {
  const {id} = props;
  const [recipe, setRecipe] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/recipes/' + id)
      .then(response => {
        setRecipe(response.data)
        setLoaded(true);
      })
      .catch(err => {
        console.log(err)
      });
  })
  const onSubmitHandler = (e, data) => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/recipes/" + id, data)
      .then(response => {
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      })

  }
  return (
    <div>
      <h1>Editing: {recipe.title} </h1>
      {loaded &&
        <Form
          onSubmitHandler= { onSubmitHandler } 
          initialTitle={recipe.title}
          initialOrigin={recipe.origin}
          initialIngredients={recipe.ingredients}
        />
      }
      <DeleteButton/>
    </div>
  )
}

export default EditView;