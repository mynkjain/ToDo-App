import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import TaskDataService from './services/TaskService'


export class App extends Component {
  componentDidMount() {
    TaskDataService.getAll()
      .then((response) => {
        console.log(response.data)
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App
