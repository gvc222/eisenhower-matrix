import React, { useState } from "react";

export const Form = (props) => {
  //setting states for list content
  const [name, setName] = useState("");
  //handling submissions
  const handleSubmit = (e) => {
    e.preventDefault();
    //handling if string in input is empty
    // if (name === "") {
    //   alert("Please enter a task");
    // } else {
    //   props.onSubmit(name);
    //   //sets input value back to empty to reset
    //   setName("");
    // }
    alert(`You have submitted a task! But that feature isn't added yet LOL`)
  };
  //handling changes in input
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form className="form-container">
        <h2>
          <label>What are you worried about?</label>
        </h2>

        <input
          type="text"
          name="text"
          value={name}
          id="task-input"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
    </div>
  );
};
