import React from 'react';


const Popup = ({ handleClose, recipeName, recipeDesc }) => {

  return (
    <div className="background-cover">
      <div className="popup-container">
        <h2>{recipeName}</h2>
        <p>{recipeDesc}</p>
        <br />
        <div className="button-recipe-option">
          <button onClick={()=>{ alert('Modify - Not ready yet :)'); }}>Modify</button>
        <button onClick={handleClose}>
          Close</button>

        </div>
      </div>
    </div>
  );
};

export default Popup;
