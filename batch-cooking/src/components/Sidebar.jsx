import React from 'react';


const Sidebar = () => {


return (

  <div>
     <input type="range" id="distance" name="distance"
         min="0" max="11" />
    <label for="distance">Distance (km)</label>

    <input type="range" id="groupe-size" name="groupe-size"
         min="0" max="5" />
    <label for="groupe-size">Group size</label>
    <br />
    <label for="choice1"> Fish      </label>
      <input type="checkbox" className="choice" id="choice1" name="choice1" value="Fish" />
    <label for="choice2"> Nut </label>
      <input type="checkbox" className="choice" id="choice2" name="choice2" value="Nut" />
    <label for="choice3"> Egg </label>
      <input type="checkbox" className="choice" id="choice3" name="choice3" value="Egg" />
    <label for="choice4"> Soy </label>
      <input type="checkbox" className="choice" id="choice4" name="choice4" value="Soy" />

  </div>
  )
}

export default Sidebar;
