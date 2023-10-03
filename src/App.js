import './App.css'
import React, { useState } from 'react';
import { Form } from './components/Form';
import { Filters} from './components/Filters';
import { Lists } from './components/Lists';
import { Matrix } from './components/Matrix';

//Filter list object
const FILTER_MAP = {
  All: () => true,
  List: (listView) => true,
  Matrix: (matrixView) => true,
  Completed: (completedView) => true
}
//Get keys of Filter list Object
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App() {

  //tracking state of list items
  const [tasks, setTasks] = useState('');
  //tracking filter view
  const [filter, setFilter] = useState('List')

  //defining the Lists Component with filters and maps method applied.
  //We will call later in the App functions as {tasklist} instead of <Lists />
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) =>
      <Lists
      key={task.id}
      id={task.id}
      name={task.name}
      completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask = {deleteTask}
      />
    );

  //We will use <Filters /> as {filterList} in App after mapping through each view list (name)
  const filterList = FILTER_NAMES.map((name) => (
    <Filters 
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  //function for adding task list using submit button in form
  const addTask = (name) => {
    const newTask = {name, completed: false}
    setTasks([...tasks, newTask])
  }

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task)=>{
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  // const deleteTask = (id) => {
  //   const remainingTasks = tasks.filter((task) => id !== task.id)
  //   setTasks(remainingTasks)
  // }
    const deleteTask = () => {
      setTasks('')
    }
  return (
    <div className="app">
      <h1 className='appTitle'>Boinkie's Eisenhower Matrix App</h1>
      {/* Input for writing new task and button to submit the form */}
      <Form onSubmit={addTask}/>
      {/* Change the view type from List only to Matrix or both, contains <Filters /> component */}
      {filterList}
      {/* List of tasks in a to-do list format, contains <Lists /> component */}
      {taskList}
      {/* Tasks categorized in an Eisenhower Matrix */}
      <Matrix />
    </div>
  );
}

export default App;
