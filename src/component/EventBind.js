import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello Sanjeet"
        }
        //  this.handleChange=this.handleChange.bind(this)      //binding in constructor
    }
     handleChange = () =>   //binding using arrow function
    {
        this.setState({
            message:"Hello Ajeet"
        })
   console.log("Message Has Changed")
    }
    
    render() {
        const {message}=this.state
        return (
            <div>
                <h1>{message}</h1>
                <button onClick={this.handleChange.bind(this)}>Change Text</button> 
                {/* <button onClick={() =>this.handleChange()}>Change Text</button> */}

            </div>
        )
    }
}

export default EventBind
