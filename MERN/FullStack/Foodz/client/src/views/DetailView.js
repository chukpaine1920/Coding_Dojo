import React, {useState, useEffect} from "react";
import DeleteButton from "../components/DeleteButton";
import axios from "axios";

const DetailView = props => {
  const {id} = props;
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    axios.get('http://localhost:8000/api/recipes/' + id)
      .then(response => {
        setRecipe(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>Origin: {recipe.origin}</p>
      <p>Ingredients: {recipe.ingredients}</p>
      <DeleteButton id={recipe._id}/>
    </div>
  )
}
export default DetailView;
