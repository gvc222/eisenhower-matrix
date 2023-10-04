import React from 'react'

export const Filters = ({handleFilterChange}) => {
  return (
    <div className="filters">
        <button type="button" value="all" onClick={() => handleFilterChange('all')}>View All</button>
        <button type="button" value="list" onClick={() => handleFilterChange('list')}>List View</button>
        <button type="button" value="matrix" onClick={() => handleFilterChange('matrix')}>Matrix View</button>
        <button type="button" value="completed" onClick={() => handleFilterChange('completed')}>Completed</button>
      </div>
  )
}
