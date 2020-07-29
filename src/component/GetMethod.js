import React, { Component } from 'react'
import axios from 'axios'
export class GetMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            getValue: [],
        }
    }
    componentDidMount() {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                this.setState({
                    getValue: res.data.data
                })
                console.log("value of responce", res.data.data)
            })
            .catch(err => {
                console.log("error message", err)
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.getValue ?
                        this.state.getValue.map(value => <h1 key={value.id}>{value.first_name} {value.last_name}</h1>) : null
                }
            </div>
        )
    }
}

export default GetMethod
