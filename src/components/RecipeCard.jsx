import React from 'react';
import './RecipeCard.css'; // 稍後會建立

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <h3>{recipe.Name}</h3>
      <h4>所需材料:</h4>
      <ul>
        {recipe.Material.map((item, index) => (
          <li key={index}>
            {item.material}: {item.value} {item.unit}
          </li>
        ))}
      </ul>
      <h4>作法:</h4>
      <p>{recipe.Description}</p>
      {/* 可以根據需求顯示 timestamp */}
      {/* <small>更新時間: {new Date(recipe.timestamp._seconds * 1000).toLocaleString()}</small> */}
    </div>
  );
}

export default RecipeCard;