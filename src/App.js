import './App.css'
import React, { useState } from 'react';
import { Form } from './components/Form';
import { Filters } from './components/Filters';
import { Matrix } from './components/Matrix';
import { ListView } from './components/ListView';
// import { MatrixView } from './components/MatrixView';
import { CompletedTasks } from './components/CompletedTasks';

//Filter list object

//Get keys of Filter list Object

function App() {

  //tracking state of list items
  const [tasks, setTasks] = useState([]);
  // tracking filter view
  const [filter, setFilter] = useState('all')
  const [ checkedTasks, setCheckedTasks ] = useState([])
  
  const handleFilterChange = (filter) => {
    setFilter(filter);
  }

  const handleCheckboxChange = (index) => {
    setCheckedTasks(prevState => prevState.includes(index)
      ? prevState.filter(item => item !== index)
      : [...prevState, index]
    );
  }
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
          />
        )
      case 'matrix':
        return (
          <Matrix />
          // <MatrixView tasks={filtered} />
        )
      case 'completed':
        return <CompletedTasks tasks={checkedTasks}/>
      default:
        return(
        <div>
          <ListView
            tasks={filtered}
            handleCategoryChange={handleCategoryChange}
            handleCheckboxChange={handleCheckboxChange}
            handleDeleteButtonClick={handleDeleteButtonClick}
          />
          <Matrix />
        </div>
        )
    }
  }
  

  return (
    <div className="app">
      <h1 className='appTitle'>Boinkie's Eisenhower Matrix App</h1>
      <Form addTask={(task) => setTasks([...tasks, task])}/>
      
      <Filters handleFilterChange={handleFilterChange} handleCategoryChange={handleCategoryChange}/>

      {filteredTasks(filter, 'all')}
      
    </div>
  );
}

export default App;
