import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Views/Home';
import Users from './Views/Users';
import coreStyle from './css/core.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{textAlign: 'center' }}>
          <nav>
            <div className="left">
              <Link to="/"> Strona Główna </Link>
            </div>
            <div className="right">
              <Link to="/users"> Użytkownicy </Link>
            </div>
            <br/><br/><br/><br/>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />

          <footer>
            <br/><br/><br/><br/>
            <p> Damian Stępniak </p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
