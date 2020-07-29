import React, { Component } from 'react'
import axios from 'axios'
export class PostMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            job: ''
        }
    }
    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleJob = (event) => {
        this.setState({
            job: event.target.value
        })
    }
    handleTitle = (event) => { this.setState({ title: event.target.value }) }
    handleSubmit = event => {
        event.preventDefault()
        axios.post('https://reqres.in/api/users', this.state)
            .then(res => {
                console.log("value is post", res)
            })
            .catch(err => { console.log("error message", err) })
    }
    render() {
        const { name, job } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name: </label>
                        <input value={name} onChange={this.handleName}></input><br /><br />
                        <label>Body: </label>
                        <input value={job} onChange={this.handleJob}></input><br /><br />
                    </div>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }
}

export default PostMethod
