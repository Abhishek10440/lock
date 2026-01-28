// import React, { Component } from 'react';
// import './App.css';
// import Counter from './component/Counter';
// import Student from './Student';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "abhishek"
//     };
//   }

//   // apple() {
//   //  this.setState({data:this.state.data+1})
//   // }

//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.data}</h1>
//         <button onClick={() => this.apple()}>
//           Click me !
//         </button>
//         <Counter />
//         <Student name={"abhi"} email="Abhi@abhi"other={{address:'gurgoan'}}/>
//         <Student name={"sabis"} email="sabis@sabis" other={{address:'gurgoan'}}/>
//          <Student name={"ram" } email="ram@ram" other={{address:'gurgoan'}}/>
//         <Student name={"syam"} email="syam@syam" other={{address:'gurgoan'}} />
//       </div>
//     );
//   }
// }

// export default App;
// import logo from './logo svg';
import './App.css';
import React ,{ useState } from 'react';
//  { useState } from 'react';
// {useState} from 'react';
function App() {
  const [data,setData]=useState(null)
  function getData(val)
  {
    console.log(val.target.value)
    setData(val.target.value)
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <input type="text" onChange={getData}/>
    </div>
  );
}

export default App;

