import React, { Component } from 'react'

export class ClassClick extends Component {
    handleEvent = () => {
        console.log("Button Clicked")
    }
    render() {
        
        return (
            <div>
                <button onClick={this.handleEvent}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick
