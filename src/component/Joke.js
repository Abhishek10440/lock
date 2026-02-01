import React from 'react';

class Joke extends React.Component {
  render() {
    console.warn("Render Joke");
    return (
      <div>
        <h1>Hello Hello Hello</h1>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Joke;
