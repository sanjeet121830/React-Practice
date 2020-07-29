import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: ' ',
            comments: ' ',
            select:' '
        }
    }
    handleform = (event) => {
        this.setState({
            userName: event.target.value,
           
        })
        // console.log("value of event :", event.target.value)
    }
    handleComents = event => {
        this.setState({

            comments: event.target.value
        })

    }
    handleSelect = event => {
        this.setState({
            select:event.target.value
        })
    }
    render() {
        return (
            <form>
                <div>
                    <label>UserName : </label> <br />
                    <input type='text' value={this.state.userName} onChange={this.handleform}></input>
                    <br /><br /><br />
                </div>
                <div>
                    <label>Comments :</label><br />
                    <textarea value={this.state.comments} onChange={this.handleComents}></textarea> <br/><br/><br/>
                </div>
                <div>
                    <label>Select :</label><br/>
                    <select value={this.state.select} onChange={this.handleSelect}>
                        <option>React.js</option>
                        <option>Vue.js</option>
                        <option>Angular.js</option>
                    </select>
                </div>
        <h1>{this.state.select}</h1>
            </form>
        )
    }
}

export default Form
