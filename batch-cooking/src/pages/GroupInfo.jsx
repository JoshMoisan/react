import { useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";


const GroupInfo = () => {
  const {groupName} = useParams()
  let targetGroup = ''

  data.team.map(element => {
    if (element.name === groupName) {
      targetGroup = element
  } else {
      console.log("Nope")
    }

  });



  return (
    <div>
      <ol>
        <li>{targetGroup.name}</li>
        <li>{targetGroup.users}</li>
        <li>{targetGroup.meals}</li>
      </ol>
    </div>
  )
}

export default GroupInfo;
