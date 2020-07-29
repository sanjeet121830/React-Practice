import React, { Component } from "react";
class Message extends Component {
    constructor() 
    {
        super()
            this.state = {
             Message:'Welcome Visitor'
            }
        
    }
    changeHandle = () => {
        this.setState({
            Message:"Thank you for Subscribing"
        })
    }
    render() {
        return (
            <div>
                <h3>{this.state.Message}</h3>
                <button onClick={()=> this.changeHandle()} type='button' style={{background:"green",border:"1px solid black",padding:"10px 20px"}}>Subscribe</button>
            </div>

        )
    }
}
export default Message;