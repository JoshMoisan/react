import React from "react";

const Card = ({targetGroup, index}) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

   return (
    <li>
      <div id="weekday">{days[index]}</div>
      <a href="/oops">
        <img src={index != 4 ? `https://source.unsplash.com/random/?${targetGroup.meals[index]}` : "https://t3.ftcdn.net/jpg/03/10/17/76/360_F_310177612_ZF5ucdsR1SEm76F9ydhfLzlotishG1Ug.jpg"} alt={targetGroup.meals[index]} className="arch" />
      </a>
      <h3>{targetGroup.meals[index]}</h3>
      <h4>
        by {targetGroup.users[index] ? targetGroup.users[index] : "You"}
      </h4>
    </li>
  );
};

export default Card;
