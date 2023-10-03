import React from 'react'

export const Lists = () => {
    return (
    <ul className='listView'>
        <li>
            <input type="checkbox"/>
            <label>List item 1</label>
            <select name="category">
                <option value="do">Do</option>
                <option value="do">Decide</option>
                <option value="do">Delegate</option>
                <option value="do">Delete</option>
            </select>
            <button>Delete</button>
        </li>
        <li>
            <input type="checkbox"/>    
            <label>List item 2</label>
            <select name="category">
                <option value="do">Do</option>
                <option value="do">Decide</option>
                <option value="do">Delegate</option>
                <option value="do">Delete</option>
            </select>
            <button>Delete</button>
        </li>
        <li>
            <input type="checkbox"/>
            <label>List item 3</label>
            <select name="category">
                <option value="do">Do</option>
                <option value="do">Decide</option>
                <option value="do">Delegate</option>
                <option value="do">Delete</option>
            </select>
            <button>Delete</button>
        </li>
    </ul>
    )     
}
