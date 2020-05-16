import React from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/general.css';

import Home from './pages/home';
import Skills from './pages/skills';
import Projects from './pages/projects';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Layout from './components/layout'
import { Divider } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch>
          <Route path='/' exact={true} component={Home} />
          <Route path='/skills' exact={true} component={Skills} />
          <Route path='/projects' exact={true} component={Projects} />
          <Route path='/contact' exact={true} component={Contact} />
          <Route path='/resume' exact={true} component={Resume} />
        </Switch> */}
        <Wrapper>
          <Layout />
          <Home />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 98vw;
`
