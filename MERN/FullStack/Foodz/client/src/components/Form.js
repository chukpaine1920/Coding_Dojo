import React, {useState} from "react";

const Form = props => {
  const { onSubmitHandler, initialTitle, initialOrigin, initialIngredients } = props;
  const [title, setTitle] = useState(initialTitle);
  const [origin, setOrigin] = useState(initialOrigin);
  const [ingredients, setIngredients] = useState(initialIngredients);
  return (
    <form onSubmit={e => {onSubmitHandler(e, { title, origin, ingredients }) }}>
      <p>
        <label>Title</label>
        <input type="text" value={title} name="title" onChange={(e) => {setTitle(e.target.value) }} />
      </p>
      <p>
        <label>Origin</label>
        <input type="text"  value={origin} name="origin" onChange={(e) => {setOrigin(e.target.value) }} />
      </p>
      <p>
        <label>Ingredients</label>
        <input type="text" value={ingredients} name="ingredients" onChange={(e) => {setIngredients(e.target.value) }} />
      </p>
      <input type="submit" />
    </form>
  )
}

export default Form; 