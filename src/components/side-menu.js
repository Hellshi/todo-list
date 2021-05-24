import Img from 'react'
import Index from '../images/buttons/home_n.svg'
import TDo from '../images/buttons/todo-b.svg'
import Plan from '../images/buttons/planner-b.svg'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
const SideMenu = () => {
    return (

        <div className="side-menu">

                <ul className="botoes">
                    <Link to='/'>
                        <li className="index-b">index</li>
                    </Link>
                    <Link to='/todo'>
                        <li className="todo-b" >todo</li>
                    </Link>
                    <Link to='/planner'>
                        <li className="planner-b" >plan</li>
                    </Link>
                </ul>
            </div>  
    );
}
 
export default SideMenu;