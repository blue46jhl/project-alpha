import React, { Component } from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Register from "./components/register.js";
import Login from "./components/login.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      dbResponse: ""
    };
  }

  callAPI() {
      fetch("http://localhost:9000/testAPI")
        .then((resp) => resp.text())
        .then((resp) => this.setState({ apiResponse: resp }))
        .catch(error => error);
  }

  callDB() {
    fetch("http://localhost:9000/testDB")
        .then((resp) => resp.text())
        .then((resp) => this.setState({ dbResponse: resp }))
        .catch(error => error);
  }

  componentDidMount() {
      this.callAPI();
      this.callDB();
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" target="_blank">
              <img src={logo} width="60" height="60" alt="React" />
            </a>
            <Link to="/" className="navbar-brand">Forum App </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/register" exact component={Register} />
          <Route path="/login/:id" component={Login} />
          <p className="App-intro"> {this.state.apiResponse}</p>
          <p className="App-intro"> {this.state.dbResponse}</p>
        </div>
      </Router>
    );
  }
}

export default App;
