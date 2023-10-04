import React from 'react'

export const CompletedTasks = ({tasks}) => {
  return (
    <ul>
      {tasks.map((index) => (
        <li key={index}>
          <label>{tasks[index].task}</label>
        </li>
      ))}
    </ul>
  )
}

