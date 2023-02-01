import React from "react";
import { useHistory } from "react-router-dom";

import construction from "../images/underconstruction.png";


const Oops = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack()
  }

  return (
    <div className="container">
      <div className="container-oops">
        <h1>Working on it </h1>
        <h2>Comeback later...</h2>

        <img className="construction" src={construction} alt="Page in construction" />
        
        <button onClick={goBack} id="back-button">Back</button>
      </div>
    </div>
  )
}

export default Oops;
