import React from "react";
import RecipeCard from '../components/RecipeCard'

const MyRecipe = () => {


  return (
    <div className="container">
      <h1>My Recipes</h1>

      <div className="grid">
        <RecipeCard
          recipeName="Babaganoush"
          recipeImg="https://www.killingthyme.net/wp-content/uploads/2020/08/baba-ganoush-1.jpg"
        />

        <RecipeCard
          recipeName="Pork Tacos"
          recipeImg="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Carnitas-Tacos-2.jpg"
        />

        <RecipeCard
          recipeName="Tomato Risotto"
          recipeImg="https://simply-delicious-food.com/wp-content/uploads/2020/07/Instant-pot-tomato-basil-risotto-5.jpg"
        />
      </div>

    </div>
  );
};

export default MyRecipe;
