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
  const showMenuOption = () => {
    const target = document.querySelector(".red-cover-hidden")
    const targetButton = document.querySelector(".button-hidden")

    target.classList.remove("red-cover-hidden")
    target.classList.add("red-cover-show")

    targetButton.classList.remove("button-hidden")
    targetButton.classList.add("button-show")
  }
  const goBack = () => {
    const target = document.querySelector(".red-cover-show")
    const targetButton = document.querySelector(".button-show")

    target.classList.remove("red-cover-show")
    target.classList.add("red-cover-hidden")

    targetButton.classList.remove("button-show")
    targetButton.classList.add("button-hidden")
  }
  const hoverInButton = () => {
    const target3 = document.getElementById("newMeal")
    target3.innerHTML = "+"
  }
  const hoverOutButton = () => {
    const target4 = document.getElementById("newMeal")
    target4.innerHTML = "New Meal"
  }

  return (
    <div className="container">
      <div className="button-hidden">
        <ul>
          <li><a href="/myrecipe">From my recipe</a></li>
          <li>
            <a  id="newMeal"
                onMouseOver={hoverInButton}
                onMouseOut={hoverOutButton}
                href="/newrecipe">
                New Meal
            </a>
          </li>
          <li><a onClick={goBack} href="#">Back</a></li>
        </ul>
      </div>


      <div className="red-cover-hidden"></div>
        <div className="text">
          <h1>This week for</h1>
          <h1>{targetGroup.name}...</h1>
        </div>

        <div className="button-option">
          <ol>
            <li><a onClick={showMenuOption} href="#">Add my meal</a></li>
            <li><a href="/oops">Group Forum</a></li>
            <li onClick={confirmQuit} id="quit">Quit this group</li>
          </ol>
        </div>

      <div className="menu-box">
        <div className="date">
          <h5>{monthName[month]} {day-7}th </h5>
          <h4>{monthName[month]} {day}th </h4>
          {/* CHECK DATE HERE */}
          <h5>{day + 7 > 31 ? monthName[month + 1] : monthName[month] } {day + 7 > 31 ? "6" : day + 7 }th </h5>
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
