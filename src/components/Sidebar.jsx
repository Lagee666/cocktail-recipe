import React from 'react';
import './Sidebar.css'; // 稍後會建立

function Sidebar({ materials, selectedMaterial, onSelectMaterial, isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-sidebar" onClick={onClose}>×</button>
      <h2>材料列表</h2>
      <ul>
        <li
          key="all"
          className={!selectedMaterial ? 'active' : ''}
          onClick={() => {
            onSelectMaterial(null);
            onClose();
          }}
        >
          所有食譜
        </li>
        {materials.map(material => (
          <li
            key={material}
            className={selectedMaterial === material ? 'active' : ''}
            onClick={() => {
              onSelectMaterial(material);
              onClose(); // 點擊後關閉側邊欄
            }}
          >
            {material}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;