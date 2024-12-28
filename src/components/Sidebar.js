import React from "react";

const Sidebar = ({ addNode }) => {
  return (
    <div className="sidebar" style={{ padding: '10px', background: '#f4f4f4' }}>
      <button onClick={addNode}>Add Node</button>
    </div>
  );
};

export default Sidebar;
