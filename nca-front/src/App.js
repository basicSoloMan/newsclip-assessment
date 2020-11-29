import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Nav, Navbar } from 'react-bootstrap';
import Variants from './pages/Variants/Variants';
import Models from './pages/Models/Models';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="Brand">Newsclip Assessment</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/models">Models</Nav.Link>
              <Nav.Link href="/variants">Variants</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/variants">
            <Variants />
          </Route>
          <Route path="/models">
            <Models />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
