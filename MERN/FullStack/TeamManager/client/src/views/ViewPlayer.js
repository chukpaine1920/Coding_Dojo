import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const ViewPlayer = (props) => {

  const [player, setPlayer] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/players/" + props.id)
      .then((res) => setPlayer(res.data))
      .catch((err) => Navigate("/error"));
  }, [props.id]);

  return (
    <div className="container mt-5 text-center">
      <h3 className="display-3">{player.name}</h3>
      <p>Number of Books: {player.number_of_books}</p>
      <div className="d-inline-flex mt-3">
        <Link to={`/edit/${player._id}`} className="btn btn-primary mr-1">Update</Link>
        <DeleteButton playerId={player._id} successCallback={() => Navigate('/')}/>
      </div>
    </div>
  )
}

export default ViewPlayer