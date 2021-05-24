import React from 'react'

export default function ToDo({text, todo, todos, setTodos}) {
    
//Eventos na Atividade

    const DeleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const CompleteHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            } return item
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed": ''}`}>{text}</li>
            <button onClick={CompleteHandler} className="complete-btn"></button>
            <button onClick={DeleteHandler} className="trash-btn"></button>            
        </div>
    )
}
