// import React from 'react';
import { useState } from 'react';
import './App.css';
import Joke from './component/Joke';

function App() {
  const [name, setName] = useState("Anil");

  return (
    <div className="App">
      <Joke name={name} />
      <button onClick={() => setName("Sidhu")}>
        update button
      </button>
    </div>
  );
}

export default App;

// import Showhide from './component/Showhide';
// import Form from './component/Form';
// import Profile from './component/Profile';
// import Login from './component/Login';
// import User from './component/User';
// import Member from './component/Member';
// import react from 'react';
// class App extends React.Component{
//   constructor()
//   {
//     super()
//     console.warn("constructor")
//   }
//   render()
//   {
//     console.warn("render")
//     return(
//       <h1>Hello</h1>
//     )
//   }
// }

// function App() {
//   function getData() {
//     alert("Hello from react")
//   }
//   return (
//     <div className="App">

//       {/* <h1>Hello React</h1> */}
//       {/* <Showhide />
//       <Form />
//       <Profile /> */}
//       {/* <Login /> */}
//       <User data={getData} />
//       <div>
//         <Member data={getData} />
//       </div>
//     </div>
//   );
// }

