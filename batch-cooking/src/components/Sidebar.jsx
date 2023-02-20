import React from 'react';


const Sidebar = () => {


return (

  <div className='sidebar'>
    <label for="distance">Distance <em>(km)</em></label>
      <br />
    <input type="range" id="range" name="distance"
         min="0" max="11" onChange={() => {alert("Feature doesnt Work")}} />

    <br />

    <label for="groupe-size">Group size</label>
      <br />
    <input type="range" id="range" name="groupe-size"
         min="0" max="5" />

    <br />
    <br />
    <br />

    <label for="choice1"> Fish      </label>
      <input type="checkbox" className="choice" id="choice1" name="choice1" value="Fish" />
      <br />
    <label for="choice2"> Nut </label>
      <input type="checkbox" className="choice" id="choice2" name="choice2" value="Nut" />
      <br />
    <label for="choice3"> Egg </label>
      <input type="checkbox" className="choice" id="choice3" name="choice3" value="Egg" />
      <br />
    <label for="choice4"> Soy </label>
      <input type="checkbox" className="choice" id="choice4" name="choice4" value="Soy" />

  </div>
  )
}

export default Sidebar;
