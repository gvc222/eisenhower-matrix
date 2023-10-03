import React from 'react'

export const Filters = (props) => {
  return (
    <div className="filters">
        <button type="button" onClick={()=>props.setFilter(props.name)}>
            {props.name}
        </button>
        <button type="button">Matrix View</button>
      </div>
  )
}
