import React, { Component } from "react";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./screens/home/home";
import Login from "./screens/login/Login";
import Profile from "./screens/Profile/Profile";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
