import React, { useState, useEffect } from 'react';
import './App.css'; // 稍後會建立
import Sidebar from './components/Sidebar'; // 稍後會建立
import RecipeList from './components/RecipeList'; // 稍後會建立

function App() {
  const [recipes, setRecipes] = useState([]); // 儲存所有食譜
  const [selectedMaterial, setSelectedMaterial] = useState(null); // 儲存目前選取的材料
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 控制側邊欄開關

  useEffect(() => {
    // 載入 data.json
    fetch('/data.json') // 如果 data.json 在 public 資料夾，可以直接這樣訪問
      .then(response => response.json())
      .then(data => {
        setRecipes(data);
      })
      .catch(error => console.error('Error loading recipes:', error));
  }, []); // 空陣列表示只在組件載入時執行一次

  // 根據選取的材料來篩選食譜
  const filteredRecipes = selectedMaterial
    ? recipes.filter(recipe =>
        recipe.Material.some(
          m => m.material.toLowerCase() === selectedMaterial.toLowerCase()
        )
      )
    : recipes; // 如果沒有選取材料，則顯示所有食譜

  const allMaterials = Array.from(
    new Set(recipes.flatMap(recipe => recipe.Material.map(m => m.material)))
  ); // 提取所有不重複的材料

  return (
    <div className="app-container">
      {/* <main className={'main-content'}> */}
      <button className={`sidebar-toggle ${isSidebarOpen ? 'sidebar-open' : ''}`} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
        {isSidebarOpen ? '關閉' : '打開'} 材料選單
      </button>
      {/* </main> */}

      <Sidebar
        materials={allMaterials}
        selectedMaterial={selectedMaterial}
        onSelectMaterial={setSelectedMaterial}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <h1>食譜大全</h1>
        {selectedMaterial && <h2>包含 "{selectedMaterial}" 的食譜：</h2>}
        <RecipeList recipes={filteredRecipes} />
      </main>
    </div>
  );
}

export default App;