import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ParentName:"parent"
        }
    }
    greetParent = (e) => {
        this.setState({
           ParentName:e
        }, () =>alert(`Hello ${this.state.ParentName}`) )
        // alert(`Hello ${this.state.ParentName}`)  //concationation using template literals
    }
    render() {
        return (
            <div>
                <h1>
                    Hello {this.state.ParentName}
                </h1>
                <ChildComponent greetParent={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
