import React from 'react';


const Sidebar = () => {
  const problemAlert = () => {
    return alert("Not ready yet :)")
  }


return (

  <div className='sidebar'>
    <label for="distance">Distance <em>(km)</em></label>
      <br />
    <input type="range" id="range" name="distance"
         min="0" max="11" onChange={problemAlert} />

    <br />

    <label for="groupe-size">Group size</label>
      <br />
    <input type="range" id="range" name="groupe-size"
         min="0" max="5" onChange={problemAlert}/>

    <br />
    <br />
    <br />

    <label for="choice1"> Fish      </label>
      <input type="checkbox" className="choice" id="choice1" name="choice1" value="Fish" onChange={problemAlert} />
      <br />
    <label for="choice2"> Nut </label>
      <input type="checkbox" className="choice" id="choice2" name="choice2" value="Nut" onChange={problemAlert}/>
      <br />
    <label for="choice3"> Egg </label>
      <input type="checkbox" className="choice" id="choice3" name="choice3" value="Egg" onChange={problemAlert}/>
      <br />
    <label for="choice4"> Soy </label>
      <input type="checkbox" className="choice" id="choice4" name="choice4" value="Soy" onChange={problemAlert}/>

  </div>
  )
}

export default Sidebar;
