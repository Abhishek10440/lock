import React, { Component } from 'react';
import './App.css';
import Counter from './component/Counter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: 1
    };
  }

  apple() {
   this.setState({data:this.state.data+1})
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>
          Click me !
        </button>
        <Counter />
      </div>
    );
  }
}

export default App;
