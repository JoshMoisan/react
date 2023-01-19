import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import Card from "../components/Card.jsx";


const GroupInfo = () => {
  const {groupName} = useParams()
  let targetGroup = ''

  const currentDate = new Date
  let day = currentDate.getDate();
  let month = currentDate.getMonth();
  const monthName= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
  const arrNumber =[0,1,2,3,4]


  data.team.map(element => {
    if (element.name === groupName) {
      targetGroup = element
    }});

    const confirmQuit = () => {
      const ask = window.confirm(`Are you sure you want to quit ${targetGroup.name}`);
        if (ask) {
        window.location.href = "/oops";
      }
    }

  return (
    <div>
      <div className="upper-container">
        <div className="button-option">
          <ol>
            <li><a href="/oops">Add my meal</a></li>
            <li><a href="/oops">Message the group form</a></li>
            <li onClick={confirmQuit} id="quit">Quit this group</li>
          </ol>
        </div>
        <div className="text">
          <h1>This week for</h1>
          <h1>{targetGroup.name}...</h1>
        </div>
      </div>

      <div className="container">
        <div className="date">
          <h5>{monthName[month]} {day-7}th </h5>
          <h4>{monthName[month]} {day}th </h4>
          <h5>{monthName[month]} {day+7}th </h5>
        </div>

        <div className="week-meal">
          <ol>
            {arrNumber.map((index) => (
              <Card
              targetGroup={targetGroup}
              index={index}
                />
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default GroupInfo;
