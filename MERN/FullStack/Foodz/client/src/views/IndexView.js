import React, {useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import { Link } from "@reach/router";
import axios from 'axios'

const IndexView = props => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/recipes")
      .then((response) =>{
        setRecipes(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div>
      <h1> Recipes </h1>
      <Link to="/create">Add a Recipe</Link>
      <ul>
        {recipes.map((recipe, index) => {
          return (
            <li key={index}><Link to={"/" + recipe._id}>{recipe.title} {recipe.origin} </Link>| <Link to = {"/"+ recipe._id + "/edit"}>Edit</Link> | <DeleteButton id={recipe._id} /> </li>
          )
        })}
      </ul>
    </div>
  )
}
export default IndexView;