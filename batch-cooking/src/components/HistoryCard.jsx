import React from "react";


const HistoryCard = ({title, description}) => {
  const avatarPic = "https://icones.pro/wp-content/uploads/2021/03/avatar-de-personne-icone-homme.png"

  return (
  <div className= "card-container">
    <div className="card-avatar">
      <img src={avatarPic} alt="mock-avatar" />
    </div>
    <div className="card-history">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>

  );
};

export default HistoryCard;
