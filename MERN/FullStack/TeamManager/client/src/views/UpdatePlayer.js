import React, {useState, useEffect} from 'react'
import PlayerForm from "../components/PlayerForm";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";

const UpdatePlayer = (props) => {

  const { id } = props;
  const [errors, setErrors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [player, setPlayers] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/players/${id}`)
      .then((res) => {
        setPlayers(res.data);
        setLoaded(true);
      })
      .catch((error) => {
        Navigate("/error")
      });
  }, [id])

  const updatePlayer = (player) => {
    axios
      .put(`http://localhost:8000/players/${id}`, player)
      .then((res) => {
        Navigate("/");
      })
      .catch((error) => {
        const errorResponse = error.response.data.errors;

        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div className="container text-center">
      <div className="container text-left">
        <Link to="/">Home</Link>
      </div>
      <h1>Favorite Players</h1>
      <h5>Edit Player:</h5>
      {errors.map((error, index) => (
        <p className="text-danger" key={index}>
          {error}
        </p>
      ))}
      {loaded && (
        <PlayerForm onSubmitProp={updatePlayer} initialName={player.name} />
      )}
    </div>
  )
}

export default UpdatePlayer;