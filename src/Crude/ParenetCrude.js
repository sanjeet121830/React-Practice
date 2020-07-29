import React, { Component } from 'react'
import './StyleCrude.css'

export class ParenetCrude extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '',
            create: false
        }
    }
    handleCrude = (e) => {
        this.setState({
            data: e.target.value
        })
        e.preventDefault();
    }
    handleCreate = () => {
        this.setState({
            create: true
        })
    }
    handleDelete = () => {
        this.setState({
            create: false
        })
    }
    render() {
        return (
            <div>
                <label className="labelStyle">Enter Data</label>: <br />
                <input type="text" className="labelStyle" value={this.state.data} onChange={this.handleCrude}></input>
                <div style={{ padding: "20px" }}>
                    <button onClick={this.handleCreate} className="primary">Create</button>
                    <button className="primary" onClick={this.handleDelete}>Delete</button>
                    <button className="primary">Update</button>
                </div>

                {
                    this.state.create && <h3>{this.state.data}</h3>
                }
            </div>
        )
    }
}

export default ParenetCrude
