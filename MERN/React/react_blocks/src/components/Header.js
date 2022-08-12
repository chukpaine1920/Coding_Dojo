import React, { Component } from 'react';

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      addAge: this.props.age
    }
  }

  render(){
      const { firstName, lastName, hairColor } = this.props;
      return (
        <div>
          <h1> {lastName},Something {firstName} </h1>
          <p>Age: {this.state.addAge} </p>
          <p>Hair Color: {hairColor} </p>
          <button
            onClick={() => {
              this.setState({ addAge: this.state.addAge + 1 });
            }}
          >Birthday Button for {firstName} {lastName}</button>
        </div>
      );
  }
}

export default Header;