import React from "react";

const newRecipe = () => {


  return (
    <div>

      <div className="wave-droite">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F6F4F3" fill-opacity="1" d="M0,160L48,133.3C96,107,192,53,288,69.3C384,85,480,171,576,213.3C672,256,768,256,864,224C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div className="wave-gauche">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F6F4F3" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,69.3C672,64,768,96,864,122.7C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

      <div className="text">
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
