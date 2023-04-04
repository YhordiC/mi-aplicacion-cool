
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state={
      age:23
    }
  }
  render() {
    return (
      <>
      <h1>HOLA {this.props.name}</h1>
      <h2>Tu edad es de: {this.state.age} años</h2>
      <p>Eres una persona {this.state.age>20 ? 'Joven' : 'Adolecente' }</p>
      <button onClick={this.birthday}>Cumplir años</button>
      </>
      
    )
  }

  birthday = () =>{
    this.setState((prevState)=>(
      {
        age: prevState.age + 1
      }
    ))
  }
}

Greeting.propTypes={
  name: PropTypes.string.isRequired
};

