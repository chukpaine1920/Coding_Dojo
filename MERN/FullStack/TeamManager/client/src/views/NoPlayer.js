import React from 'react'
import { Link } from "react-router-dom";

const NoPlayer = () => {
  return (
    <div className="container text-center mt-5">
        <p>
          We're sorry, but we could not find the player you are looking for.
          Would you like to add this player to our database?
        </p>
        <Link to="/new">Create Player</Link>
    </div>
  );
}

export default NoPlayer;