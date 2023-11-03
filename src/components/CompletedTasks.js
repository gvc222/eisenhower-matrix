import React from 'react'

export const CompletedTasks = ({tasks}) => {
  return (
    <div className="completed">
      <div className="header">
        <h3>Good job! You've completed these tasks</h3>
      </div>

      <ul className='completed-list'>
        {tasks.map((task, index) => (
          <li className='completed-task-list' key={index}>
            {task.task}
          </li>
        ))}
    </ul>
    </div>
  )
}

