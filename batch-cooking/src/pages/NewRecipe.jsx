import React from "react";

const newRecipe = () => {


  return (
    <div className="container">

      <div className="group-info">
        <h1 >Adding your meal for </h1>
        <h1>this week ...</h1>
      </div>

      <div className="meal-box">
        <div className="form">
          <form>
            <label id="meal-title-text" for="meal-title">Title</label>
              <input type="text" id="meal-title" name="meal-title" placeholder=" abc"/>

            <br />

            <label> Allergies </label>

            <br className="line-skip" />

            <label for="choice1"> Fish      </label>
              <input type="checkbox" className="choice" id="choice1" name="choice1" value="Fish" />
            <label for="choice2"> Nut </label>
              <input type="checkbox" className="choice" id="choice2" name="choice2" value="Nut" />
            <label for="choice3"> Egg </label>
              <input type="checkbox" className="choice" id="choice3" name="choice3" value="Egg" />
            <label for="choice4"> Soy </label>
              <input type="checkbox" className="choice" id="choice4" name="choice4" value="Soy" />

            <br />

            <label for="meal-description">Description </label>
              <textarea id="meal-description" name="meal-description" rows="4" cols="50" placeholder=" What's in it ?"></textarea>
          </form>

        </div>

        <div className="arch-picture">

        </div>
      </div>
          <span className="options-recipe">
            <button onClick={() => alert('Save - Not ready yet :)')}>Save </button>
            <button onClick={() => alert('Add -  Not ready yet :)')}>Add +</button>
          </span>
    </div>
  );
};

export default newRecipe;
