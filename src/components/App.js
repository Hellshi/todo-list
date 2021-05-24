import React from 'react'
import Home from './main'
import Body from './components/Body'
import Planner from './planner'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" component={Body} />
          <Route path="/planner" component={Planner} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
