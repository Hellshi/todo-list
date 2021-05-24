import React from 'react'
import ToDo from './ToDo'

export default function ToDoList({todos, setTodos}) {
    
    return (
        <div className="todo-container">
            <ul className="todo-list">

                {todos.map((todo) => (
                    <ToDo 
                    text={todo.text} 
                    key={todo.id} 
                    todos={todos} 
                    todo={todo}
                    setTodos={setTodos} 
                    />
                ))}
                    
            </ul>
        </div>
    )
}
