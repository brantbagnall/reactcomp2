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
        <div className='box-stuff' style={{width: '100px', height: '100px'}} >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra felis et neque volutpat viverra. Donec congue id enim sed tincidunt. Sed dapibus nec odio ultrices mattis. Sed faucibus luctus nunc, id lobortis felis suscipit vitae. Duis laoreet, ligula vitae egestas hendrerit, purus lacus luctus leo, vel porttitor orci est vitae mauris. Donec ac odio nisl. In dignissim lorem ac urna volutpat suscipit. Quisque sollicitudin ac ex id viverra. Aenean sed diam libero. Duis at massa non justo ultricies consequat. Duis enim lectus, faucibus quis enim nec, interdum sollicitudin erat. Donec semper orci mi, elementum finibus dui suscipit id. Duis ullamcorper vitae nisi nec auctor. Aenean facilisis blandit auctor.</p>
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
