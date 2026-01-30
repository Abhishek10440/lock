import { useState } from "react";

function Form(){
    const [name,setName]=useState("");
    const [tnc,setTnc]=useState(false);
    const [interest,setInterest]=useState("");
    function getFormData(e)
    {
        console.log(name,tnc,interest)
        e.preventDefault()
    }
    return(
        <div className="App">
            <h1>Form Form</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/><br></br>
                <input type="date" placeholder="Enter Your Date of birth"/><br></br>
                <select onChange={(e)=>setInterest(e.target.value)}>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Teusday</option>
                    <option>Wednesday</option>
                    <option>thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                </select><br></br>
                <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Term Annd Condition</span><br></br>
                <button type="submit">submit</button>

            </form>
        </div>
    );
}
export default Form;