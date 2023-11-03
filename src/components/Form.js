import React, { useState } from "react";

export const Form = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('do')

  //handling submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
      setCategory(category)
    } else {
    alert("Please enter something")
    };
  }

  //handling changes in input
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h2>
          <label>What are you worried about?</label>
        </h2>

        <input
          type="text"
          name="text"
          value={task}
          id="task-input"
          onChange={handleChange}
          placeholder="Enter a task..."
        />
        <button type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};
