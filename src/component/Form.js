function Form(){
    function getFormData(e)
    {
        e.preventDefault()
    }
    return(
        <div className="App">
            <h1>Form Form</h1>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Your Name"/><br></br>
                <input type="date" placeholder="Enter Your Date of birth"/><br></br>
                <select>
                    <option>Sunday</option>
                    <option>Monday</option>
                    <option>Teusday</option>
                    <option>Wednesday</option>
                    <option>thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                </select><br></br>
                <input type="checkbox"/><span>Accept Term Annd Condition</span><br></br>
                <input type="submit" placeholder="submit"/>

            </form>
        </div>
    )
}
export default Form;