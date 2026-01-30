import { useState } from "react";
function Profile(){
    const [loggedin, setLoggedin]=useState(5)

// if(loggedin){
    return(
        <div>
            {loggedin==1?
        <h1>Wellcome Abhi</h1>
        :loggedin==2?<h2>This is is end</h2>
        :<h3>also is end</h3>}
        </div>
    );
 }

// else{
//     return(
//         <div>
//         <h1>Wellcome Abhishek</h1></div>
//     )
//  }
// }
 export default Profile;
