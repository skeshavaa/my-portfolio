import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'typeface-roboto';
import './styles/general.css';

import Home from './pages/home';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Resume from './pages/resume';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/skills' exact={true} component={Skills} />
          <Route path='/projects' exact={true} component={Projects} />
          <Route path='/resume' exact={true} component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
