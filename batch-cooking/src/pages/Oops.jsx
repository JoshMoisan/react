import React from "react";
import { useHistory } from "react-router-dom";


const Oops = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack()
  }

  return (
    <div className="container-oops">
      <h1>Working on it </h1>
      <h2>Comeback later...</h2>
      <div className="button-option">
        <ol><li onClick={goBack} id="quit-unique">Go Back</li></ol>
      </div>
    </div>
  )
}

export default Oops;
