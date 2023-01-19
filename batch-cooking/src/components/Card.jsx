import React from "react";



const Card = ({targetGroup, index}) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  return(
      <li>
        <h4 id="weekday">{days[index]}</h4>
        <a href=""><img src="#" alt="" className="arch" /></a>
        <h3>{targetGroup.meals[index]}</h3>
        <h4>by {targetGroup.users[index] ? targetGroup.users[index]: "You"}</h4>
      </li>
  )
}

export default Card;
