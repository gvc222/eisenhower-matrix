import './App.css'
import React from 'react';
import { Form } from './components/Form';
import { Filters} from './components/Filters';
import { Lists } from './components/Lists';
import { Matrix } from './components/Matrix';

//Filter list object

//Get keys of Filter list Object

function App() {

  //tracking state of list items
  // const [tasks, setTasks] = useState('');
  //tracking filter view
  // const [filter, setFilter] = useState('List')

  //defining the Lists Component with filters and maps method applied.
  //We will call later in the App functions as {tasklist} instead of <Lists />
  

  //We will use <Filters /> as {filterList} in App after mapping through each view list (name)

  //function for adding task list using submit button in form

  //toggle if task is complete or not by referencing their id
  
  

  //delete task by clicking delete button

  return (
    <div className="app">
      <h1 className='appTitle'>Boinkie's Eisenhower Matrix App</h1>
      {/* Input for writing new task and button to submit the form */}
      <Form/>
      {/* Change the view type from List only to Matrix or both, contains <Filters /> component */}
      <Filters />
      {/* List of tasks in a to-do list format, contains <Lists /> component */}
      <Lists />
      {/* Tasks categorized in an Eisenhower Matrix */}
      <Matrix />
    </div>
  );
}

export default App;
