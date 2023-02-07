import React, { useState } from 'react';
import Popup from './Popup'

const RecipeCard = ({ recipeName, recipeImg }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="box" onClick={handleClick}>
        <div className="thumbnail">
          <img src={recipeImg} alt={recipeName} />
        </div>
        <h4>{recipeName}</h4>
      </div>
      {showPopup && (
        <Popup />
      )}
    </>
  );
};

export default RecipeCard;
