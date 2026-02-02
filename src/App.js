import './App.css';
import React,{useState,use} from 'react';
function App(){
  const [data,setData]=useState("Abhishek")

return(
  <div className="App">
    <h1>{data}!</h1>
    <button onClick={()=>setData("shah")}>Update Value</button>
  </div>
);
}
export default App;
// import React from 'react';

// import Abhi from './component/Abhi';
// class App extends React.Component{
  
  
//   constructor()
//   {
//     super();
//     this.state={
//       show: true
//     }
//   }
//   render(){
//     return(
//       <div className="App">
//         {
//          this.state.show? <Abhi />:<h1>Already Removed</h1>
//         }
        
//         <button onClick={()=>this.setState({show:!this.state.show})}>Removed</button>

//       </div>
//     )
//   }
// }



// export default App;
// import React from 'react';
// // import React, { useState } from 'react';
// import './App.css';
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state={
//       count:0 
//     }
    
//   }
//   shouldComponentUpdate(){
//     console.warn("shouldComponentUpdate",this.state.count);
//     if(this.state.count>4 && this.state.count>10)
//     {
//       return true;
//     }
    
//   }
//   render() {
//     console.warn("render")
//     return (
//       <div>
//         <h1>Component Did Mount {this.state.count}</h1>
//         <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update name</button>
//       </div>
//     );
//   }
// }

// // import Joke from './component/Joke';

// // function App() {
// //   const [name, setName] = useState("Anil");

// //   return (
// //     <div className="App">
// //       <Joke name={name} />
// //       <button onClick={() => setName("Sidhu")}>
// //         update button
// //       </button>
// //     </div>
// //   );
// // }

// export default App;

// // import Showhide from './component/Showhide';
// // import Form from './component/Form';
// // import Profile from './component/Profile';
// // import Login from './component/Login';
// // import User from './component/User';
// // import Member from './component/Member';
// // import react from 'react';
// // class App extends React.Component{
// //   constructor()
// //   {
// //     super()
// //     console.warn("constructor")
// //   }
// //   render()
// //   {
// //     console.warn("render")
// //     return(
// //       <h1>Hello</h1>
// //     )
// //   }
// // }

// // function App() {
// //   function getData() {
// //     alert("Hello from react")
// //   }
// //   return (
// //     <div className="App">

// //       {/* <h1>Hello React</h1> */}
// //       {/* <Showhide />
// //       <Form />
// //       <Profile /> */}
// //       {/* <Login /> */}
// //       <User data={getData} />
// //       <div>
// //         <Member data={getData} />
// //       </div>
// //     </div>
// //   );
// // }

