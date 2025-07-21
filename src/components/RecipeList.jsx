import React from 'react';
import RecipeCard from './RecipeCard'; // 稍後會建立
import './RecipeList.css'; // 稍後會建立

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p>沒有找到符合條件的食譜。</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.Name} recipe={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;