import React, { useState } from 'react'

export const Instructions = () => {
    const [showInstructions, setShowInstructions] = useState('true')
    const toggleInstructions = () => {
        setShowInstructions(!showInstructions);
    }

  return (
    <div className='instructions'>
        <h2>
            <button value="toggle" onClick={toggleInstructions}>
                Toggle Instructions
            </button>
        </h2>
        {(showInstructions)
        ?
        (
            <div className='steps-container'>
                <div className='steps'>
                <p><strong>Step 1:</strong> Set a timer for 3-5 minutes</p>
                <p><strong>Step 2:</strong> Using the input and "Add Task" button below, list as many tasks possible that burdens you or you would like to accomplish within the timer.</p>
                <p><strong>Step 3:</strong> In the List View, categorize each list item according to its urgency and importance with the dropdown button.
                <p>Categories:
                    <ul>
                    <li>Do: Urgent and Important. You have to do these tasks as soon as possible. Example: Take broken car to repair shop.</li>
                    <li>Decide: Non-urgent and Important. You have to do these tasks but they can wait, so you set a schedule for these to be done. Example: Setting up a doctor's appointment.</li>
                    <li>Delegate: Urgent and Unimportant. These tasks you can assign or entrust to others. Example: </li>
                    <li>Delete: Non-urgent and Unimportant. Example: Watching TV, sorting through junk email.</li>
                    </ul>
                    </p>
                </p>
                </div>
            </div>
        )
        :
        (
            null
        )
    }
        
    </div>
  )
}
