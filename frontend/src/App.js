import React, { Component } from 'react';
import './App.css';
import * as API from './APIs'

class App extends Component {

  componentDidMount() {
    API.getCategories().then(categories => console.log(categories))
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
