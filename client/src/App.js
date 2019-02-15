import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import ProjectsList from './components/ProjectsList';
import SingleProject from './components/SingleProject';

import './App.css';

class App extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/projects')
      .then(res => { this.setState({ projects: res.data }); })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <Route exact path = "/" render={props => <ProjectsList {...props} projects={this.state.projects} />} />
        <Route path = "/projects/:id" render={props => <SingleProject {...props} projects={this.state.projects} />}/>
      </div>
    );
  }
}

export default App;
