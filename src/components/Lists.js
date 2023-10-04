import React from 'react'

export const Lists = ({ tasks, setTasks, checkedTasks, setCheckedTasks, handleCategoryChange }) => {
    // const [checkedTasks, setCheckedTasks] = useState([]);

    const handleCheckboxChange = (index) => {
        setCheckedTasks((prevState) =>
            prevState.includes(index)
            ? prevState.filter((item) => item !== index)
            : [...prevState, index]
        );
    };

    const handleDeleteButtonClick = (index) => {
        console.log('Delete button clicked for index:', index);
        setTasks((prevState) => prevState.filter((_, i) => i !== index));
    }

    return (
    <ul className='listView'>
            {tasks.map((task, index) => (
                <li key={index}>
                    <input 
                        type="checkbox" 
                        checked={checkedTasks.includes(index)}   
                        onChange={() => handleCheckboxChange(index)} 
                    />
                    <label>{task.task}</label>
                    <select name="category" value={task.category} onChange={(e)=>handleCategoryChange(e, index)}>
                        <option value="do">Do</option>
                        <option value="decide">Decide</option>
                        <option value="delegate">Delegate</option>
                        <option value="delete">Delete</option>
                    </select>
                    <button onClick={()=> handleDeleteButtonClick(index)}>Delete</button>  
                </li>
            ))}
            
    </ul>
    )     
}


    // <ul className='listView'>
    //     <li>
    //         <input type="checkbox"/>
    //         <label>List item 1</label>
    //         <select name="category">
    //             <option value="do">Do</option>
    //             <option value="do">Decide</option>
    //             <option value="do">Delegate</option>
    //             <option value="do">Delete</option>
    //         </select>
    //         <button>Delete</button>
    //     </li>
    // </ul>