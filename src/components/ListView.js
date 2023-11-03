import React from "react";

export const ListView = ({
  tasks,
  handleCheckboxChange,
  handleDeleteButtonClick,
  handleCategoryChange,
  checkedTasks,
  
}) => {
  return (
    <ul className="listView">
      {tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={checkedTasks.includes(index)}   
            onChange={() => handleCheckboxChange(index)}
          />
          <label>{task.task}</label>
          <select
            name="category"
            value={task.category}
            onChange={(e) => handleCategoryChange(task.id, e.target.value)}
          >
            <option value="do">Do</option>
            <option value="decide">Decide</option>
            <option value="delegate">Delegate</option>
            <option value="delete">Delete</option>
          </select>
          <button onClick={() => handleDeleteButtonClick(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
