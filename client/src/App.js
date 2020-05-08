import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'typeface-roboto';
import './styles/general.css';

import Home from './pages/home';
import About from './pages/about';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
