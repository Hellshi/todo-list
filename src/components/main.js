import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Img from 'react'
import TIndex from '../images/buttons/todo-index.svg'
import PlanIndex from '../images/buttons/plan-index.svg'
import instagram from '../images/instagram.png'
import twitter from '../images/tt.png'
import face from '../images/face.png'


import '../index.css';
const Home = () => {
    return (
        
        <div className="home">
      <nav>
          <ul>
              <Link to="/todo">
                <li><img src={TIndex} alt=""/></li>
              </Link>

              <Link to="/planner">
                <li><img src={PlanIndex} alt=""/></li>
              </Link>
          </ul>
      </nav>

      <main>

      </main>

      <div className="side-bar">
          
          <div className="social-media">
          <div className="twitter"><a href="https://www.instagram.com/h.c.lima/" target="_blank"><img src={twitter}/></a> </div>

          <div className="instagram"><a href="https://www.instagram.com/h.c.lima/" target="_blank"><img src={instagram}/></a> </div>

          <div className="facbook"><a href="https://www.instagram.com/h.c.lima/" target="_blank"><img src={face}/></a> </div>
          </div>
          
        </div>


    </div>
    );
}
 
export default Home;