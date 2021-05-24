import React, {useState} from 'react'

function Todoform() {
    const [input, setInput] = useState('')

    const handleOnClick = event => {
        event.preventDefaut();

        console.log('Ivillys é gay')
    }
    return (
        <form className="todo-form">
            <input 
            type="text" 
            name="text" 
            placeholder="Add a to do" 
            value={input} 
            className="todo-input"/>

            <button className="todo-button" onClick={handleOnClick}>+</button>
        </form>
    )
}

export default Todoform
