import React from 'react'

export const CompletedTasks = ({tasks}) => {
  return (
    <ul className='completed-list'>
      {tasks.map((task, index) => (
        <li key={index}>
          <label>{task.task}</label>
        </li>
      ))}
    </ul>
  )
}

