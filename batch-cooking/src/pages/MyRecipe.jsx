import React from "react";
import RecipeCard from '../components/RecipeCard'

const MyRecipe = () => {
  const description01 = "Grill or bake the eggplant. Grill the eggplant whole over an open flame over medium-high heat (I used my gas burner, but you can cook it on the grill), turning occasionally, with a pair of tongs, until the eggplant has fully charred on the outside and the flesh has collapsed and softened (about 15 to 20 minutes). Alternatively, you can roast the eggplant in a high-heated oven. Int his case, cut the eggplant in have and place it flesh side down on a large lightly-oiled baking sheet and roast at 425 F for about 40 minutes or until the eggplant is very soft and cooked through."

  const description02 = "Best Pork Cut for Pork Carnitas – for ultimate juicy pulled pork full of flavour, you can’t beat pork shoulder, aka pork butt. Bone in or out, it needs to be skinless so it can be rubbed with the Carnitas seasoning. Carnitas seasoning – rub pork with a simple spice mix of oregano, cumin, salt and pepper."

  const description03 = "In a saucepan over medium-high heat, brown the garlic in the oil. Add the tomatoes and bring to a boil, then simmer for about 10 minutes or until the they develop an orange hue (see note). Add the broth. Off the heat, purée the mixture with an immersion blender. Return to a boil. Season with salt and pepper. Keep warm."

  return (
    <div className="container">

      <div id="myrecipe" className="grid">
        <RecipeCard
          recipeName="Babaganoush"
          recipeImg="https://www.killingthyme.net/wp-content/uploads/2020/08/baba-ganoush-1.jpg"
          recipeDesc= {description01}
          />

        <RecipeCard
          recipeName="Pork Tacos"
          recipeImg="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Carnitas-Tacos-2.jpg"
          recipeDesc= {description02}
          />

        <RecipeCard
          recipeName="Tomato Risotto"
          recipeImg="https://simply-delicious-food.com/wp-content/uploads/2020/07/Instant-pot-tomato-basil-risotto-5.jpg"
          recipeDesc= {description03}
          />

        <h1 id="title-myrecipe">My Recipes</h1>
      </div>

    </div>
  );
};

export default MyRecipe;
