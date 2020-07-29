import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     increment = () => {
         this.setState({
             count:this.state.count+1
         }, () => {console.log("value of callBack Function",this.state.count)})
         console.log("count value",this.state.count)
     }
     handleChange = () => {
         console.log("function is called after state changed")
     }
     incrementFive = () => {
         this.increment()
         this.increment()
         this.increment()
         this.increment()
         this.increment()
     }
    render() {
        return (
            <div>
                <h1>Count Value : {this.state.count}</h1>
                <button onClick={()=> this.incrementFive()} type='button' style={{background:"green",border:"1px solid black",padding:"10px 20px"}}>Inrement</button>
            </div>
        )
    }
}

export default Counter
