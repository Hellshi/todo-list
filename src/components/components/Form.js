import React, {useState} from 'react'
const Form = ({inputText, setInputText, todos, setTodos}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, {text:inputText, completed:false, id: Math.random() * 1000}]);
        setInputText('')
    }

    return (
        <form>
            <input 
                value={inputText}
                type="text"
                className="to-do-input"
                onChange={inputTextHandler}
                placeholder="O que temos planejado para hoje?"
            />
            <button onClick={submitToDoHandler} className="add-to-do-btn">+</button>
        </form>
    );
}
 
export default Form;