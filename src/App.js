import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {changeIsGood} from './ducks/reducer';
import {bindActionCreators} from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.changeTest}
        <button onClick={()=>this.props.changeIsGood()} >Change is good</button>
      </div>
    );
  }
}

// COMP 43J
function mapDispatchToProps(dispatch){
  return bindActionCreators({changeIsGood}, dispatch)
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, mapDispatchToProps )(App);
