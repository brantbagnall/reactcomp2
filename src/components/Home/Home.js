import React, { Component } from 'react';
import { connect } from 'react-redux';
import {changeIsGood} from '../../ducks/reducer';
import {bindActionCreators} from 'redux'
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        test: 0
      }
    }

    componentDidMount(){
        console.log(this.refs)
    }
    
    

  render() {
      console.log(this.refs.myid)
    return (
      <div className="App">
        {this.props.changeTest}
        <button onClick={()=>this.props.changeIsGood()} >Change is good</button>

        <div>
            <input onChange={()=>{
                this.setState({
                    test: this.refs.myid.value
                })
            }} type='number' defaultValue='0' ref='myid' />
            {/* COMP 42E */}
            <Link to={`/test/${this.state.test}`}>To Id page</Link>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps )(Home);
