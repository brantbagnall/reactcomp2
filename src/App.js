import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Test from './components/Test/Test';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/test/:id' component={Test} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
