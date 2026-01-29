
import React, { useState } from "react";
function Showhide() {
    const [status, setStatus] = useState(true);
    return (
        <div className="App">
            {
                status ? <h1>Hello World</h1> : null
            }
            {/* <button onClick={() => setStatus(true)}>Show</button>
            <button onClick={() => setStatus(false)}>Hide</button> */}
             <button onClick={() => setStatus(!status)}>Hide</button>
        </div>
    );
}
export default Showhide;