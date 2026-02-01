import react from 'react'
function Member(props){
    return(
        <div>
            <h1>hello world</h1>
            <button onClick={()=>props.data()}>Call data</button>
        </div>
    )
}
export default Member;