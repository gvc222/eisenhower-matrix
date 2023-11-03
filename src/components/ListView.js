import React from "react";
import { MdDeleteForever } from 'react-icons/md';

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
          <span> </span>
          <label>{task.task}</label>
          <span> </span>
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
          <span> </span>
          <MdDeleteForever className="delete-button" onClick={() => handleDeleteButtonClick(index)} />
        </li>
      ))}
    </ul>
  );
};
