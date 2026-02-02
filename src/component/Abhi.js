
import React from 'react';

class Abhi extends React.Component{
    componentWillUnmount(){
        alert(" componentWillUnmount")
    }
    render(){
        return(
            <div>
                <h1>this is show and hide</h1>
            </div>
        )
    }
}


export default Abhi;