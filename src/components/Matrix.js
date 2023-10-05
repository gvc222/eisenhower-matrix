import React from 'react';

export const Matrix = ({ tasks }) => {
  const doTasks = tasks.filter(task => task.category === 'do');
  const decideTasks = tasks.filter(task => task.category === 'decide');
  const delegateTasks = tasks.filter(task => task.category === 'delegate');
  const deleteTasks = tasks.filter(task => task.category === 'delete');

  return (
    <div className='matrix'>
      <div className="matrix-row">
        <div className="matrix-column">
          <label>Do now</label>
          <ul className='do'>
            {doTasks.map((task) => 
              <li className='do' key={task.id}>{task.task}</li>
            )}
          </ul>
          
          <label>Decide</label>
          <ul className='decide'>
            {decideTasks.map((task) => 
              <li className='decide' key={task.id}>{task.task}</li>
            )}
          </ul>
        </div>

        
          
        
      </div>

      <div className="matrix-row">
        <div className="matrix-column">
          <label>Delegate</label>
          <ul className='delegate'>
            {delegateTasks.map((task) => 
              <li className='delegate' key={task.id}>{task.task}</li>
            )}
          </ul>

          <label>Delete</label>
          <ul className='delete'>
            {deleteTasks.map((task) => 
              <li className='delete' key={task.id}>{task.task}</li>
            )}
          </ul>
        </div>

        
          
        
      </div>
    </div>
  )
}
