import React, {useState } from "react";

const Form = props => {
  const { onSubmitHandler } = props;
  const [title, setTitle] = useState("");
  const [origin, setOrigin] = useState("");
  const [time, setTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  return (
    <form onSubmit={e=>{onSubmitHandler(e, {title, origin, time, ingredients, instructions}) }}>
      <p>
        <label>Title</label>
        <input type="text" name="title" onChange={(e) => {setTitle(e.target.value) }} />
      </p>
      <p>
        <label>Origin</label>
        <input type="text" name="origin" onChange={(e) => {setOrigin(e.target.value) }} />
      </p>
      <p>
        <label>Time</label>
        <input type="text" name="time" onChange={(e) => {setTime(e.target.value) }} />
      </p>
      <p>
        <label>Ingredients</label>
        <input type="text" name="ingredients" onChange={(e) => {setIngredients(e.target.value) }} />
      </p>
      <p>
        <label>Instructions</label>
        <input type="text" name="instructions" onChange={(e) => {setInstructions(e.target.value) }} />
      </p>
      <input type="submit" />
    </form>
  )
}

export default Form;
