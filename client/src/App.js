import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'typeface-roboto';
import './styles/general.css';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/about' exact={true} component={About} />
          <Route path='/projects' exact={true} component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
