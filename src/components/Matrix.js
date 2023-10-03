import React from 'react'

export const Matrix = () => {
  return (
    <div className='matrix'>
        <div className="do box">
        <ul className='do'>
          <label>Do now</label>
          <li>Eat</li>
        </ul>
        </div>

        <div className="decide box">
        <ul className='decide'>
          <label>Decide</label>
          <li>Homework</li>
        </ul>
        </div>

        <div className="delegate box">
        <ul className='delegate'>
          <label>Delegate</label>
          <li>Throwing trash</li>
        </ul>
        </div>

        <div className="delete box">
        <ul className='delete'>
          <label>Delete</label>
          <li>Worry</li>
        </ul>
        </div>

      </div>
  )
}
