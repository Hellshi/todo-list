import React, {useState} from 'react'
import Form from './Form'
import ToDoList from './ToDoList'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

const Body = () => {

    //Estabelecendo nosso estado inicial, que é, bem, vazio
    const [inputText, setInputText] = useState('')

    //Estado inicial do nosso array de Todos:

    const [todos, setTodos] = useState([])

    const dateBuilder = (d) => {
        let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    
        let date = d.getDate(); 
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${date} de ${month} de ${year}`
      }

    return (
        <div className="Body">
            <div className="ornamento1"></div>
            <div className="ornamento2"></div>
            <div className="nav">
                <Link to="/"><div className="homeb"></div></Link>
                <Link to="/todo"><div className="tob"></div></Link>
                <Link to="/planner"><div className="planb"></div></Link>
            </div>
            <header><h1>{dateBuilder(new Date ())}</h1></header>
            <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} />
            <ToDoList todos={todos} setTodos={setTodos} />
        </div>
    );
}
 
export default Body;