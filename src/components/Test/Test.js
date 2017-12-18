import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return (
      <div>
        <h1>Your id is {this.props.match.params.id}</h1>
      </div>
    )
  }
}
