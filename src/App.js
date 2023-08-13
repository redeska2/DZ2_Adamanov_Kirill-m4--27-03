import React, { Component } from 'react';
import './index.css'; 

class ColoredSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.initialColor,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      color: prevState.color === 'red' ? 'blue' : 'red',
    }));
  };

  render() {
    const { color } = this.state;
    return (
      <div
        className="square"
        style={{ backgroundColor: color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <ColoredSquare initialColor="red" />
        <ColoredSquare initialColor="blue" />
      </div>
    );
  }
}

export default App;