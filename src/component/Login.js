import react, { useState } from "react";
function Login() {
//   function loginHandle(e)
//     {
//         // e.preventDefault()
//     }
    return (
        <div>
            <h1>Login page</h1>
            {/* <form onSubmit={loginHandle}> */}
            <input type="text" placeholder="Enret User Id"></input><br></br>
            <input type="text" placeholder="Enter Password"></input><br></br>
            <input type="date" placeholder="Exam Date"></input><br></br>
            <button type="submit">login</button>
            </form>
        </div>
    )
}
export default Login;   