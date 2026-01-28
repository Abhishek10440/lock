import logo from './../logo.svg';
import './../App.css';
import { useState } from 'react';

function AppTest() {
    const Abhishek = "landbadhir"
    const [status, setStatus] = useState('More');
    const [Friends, setfriends] = useState(["Abhishk", "naresh", "navin", "nitesh"]);



    const makeFriend = () => {
        setfriends(["Abhishk", "naresh", "navin", "nitesh", "Mithilesh"])
        setStatus('More');
    }
    const removeFriend = () => {
        setfriends(["Abhishk", "naresh", "navin", "nitesh"])
        setStatus("Less");
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/Apptest lauda.js</code> and save to reload. {Abhishek}
                </p>
                {Friends?.map((data) => {
                    return (
                        <p>
                            {data}
                        </p>
                    )
                })}


                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <p>Friends are {status}</p>

                <button onClick={() => { makeFriend() }}>make Friend</button>
                <button onClick={() => { removeFriend() }}>remove friend</button>
            </header>
        </div>
    );
}

export default AppTest;
