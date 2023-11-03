import './App.css'
import React, { useState, useRef, useEffect } from 'react';
import { Form } from './components/Form';
import { Filters } from './components/Filters';
import { Matrix } from './components/Matrix';
import { ListView } from './components/ListView';
import { Instructions } from './components/Instructions';
import { CompletedTasks } from './components/CompletedTasks';
import { nanoid } from 'nanoid';

function App() {

  
  //tracking state of list items
  const [tasks, setTasks] = useState([
    {id: nanoid(), task: 'Eat', category: 'do'},
    {id: nanoid(), task: 'Sleep', category: 'decide'},
    {id: nanoid(), task: 'Cook', category: 'delegate'},
    {id: nanoid(), task: 'Social Media', category: 'delete'}
  ]);
  // tracking filter view
  const [filter, setFilter] = useState('all')
  const [ checkedTasks, setCheckedTasks ] = useState([])
  
  const handleFilterChange = (filter) => {
    setFilter(filter);
  }

  const checkedTasksRef = useRef([]);
  const handleCheckboxChange = (index) => {
    // console.log(`Checkbox clicked for index ${index}`)
    checkedTasksRef.current = checkedTasksRef.current.includes(index)
      ? checkedTasksRef.current.filter(item => item !== index)
      : [...checkedTasksRef.current, index];
    
    setCheckedTasks(checkedTasksRef.current); // Update the state with the current ref value
  }

  // useEffect for local storage saving
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("my-eisenhower-list"));
    setTasks(savedTasks)
    console.log(savedTasks)
  }, [])

  useEffect(() => {
    localStorage.setItem("my-eisenhower-list", JSON.stringify(tasks))
    console.log('Tasks saved:', tasks)
  }, [tasks])

const handleCategoryChange = (taskId, newCategory) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId ? { ...task, category: newCategory } : task
      )
    );
  }
  const handleDeleteButtonClick = (index) => {
    setTasks(prevState => prevState.filter((_, i) => i !== index));
  }

  const filteredTasks = (view, category) => {
    let filtered = tasks;

    if (category !== 'all') {
      filtered = tasks.filter((task) => task.category === category)
    }

    switch (view) {
      case 'list':
        return (
          <ListView
            tasks={filtered}
            handleCategoryChange={handleCategoryChange}
            handleCheckboxChange={handleCheckboxChange}
            handleDeleteButtonClick={handleDeleteButtonClick}
            checkedTasks={checkedTasks}
          />
        )
      case 'matrix':
        return (
          <Matrix tasks={filtered}/>
          
        )
      case 'completed':
        const completedTasks = tasks.filter((_, index) => checkedTasksRef.current.includes(index))
        return <CompletedTasks tasks={completedTasks} checkedTasks={checkedTasksRef.current}/>
      default:
        return(
        <div>
          <ListView
            tasks={filtered}
            handleCategoryChange={handleCategoryChange}
            handleCheckboxChange={handleCheckboxChange}
            handleDeleteButtonClick={handleDeleteButtonClick}
            checkedTasks={checkedTasks}
          />
          <Matrix tasks={filtered}/>
        </div>
        )
    }
  }
  
  const addTask = (task) => {
    const newTask = {
      id: nanoid(),
      task: task,
      category: 'do'
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="app">
      <h1 className='appTitle'>Boinkie's Eisenhower Matrix App</h1>
      
      <Instructions />
      <Form addTask={addTask}/>
      
      <Filters handleFilterChange={handleFilterChange} handleCategoryChange={handleCategoryChange}/>

      {filteredTasks(filter, 'all')}
      
    </div>
  );
}

export default App;
