import React, { Component } from "react";
class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: "sanjeet",
            mname: "kumar",
            lname: "sahni"
        }
    }

    render() {
        const { name, lastName } = this.props
        const { fname, mname, lname } = this.state
        return (
            <div>
                <h3>Hello {name} {lastName}</h3>
        <h1>this is {fname} {mname} {lname}</h1>
            </div>

        )
    }
}
export default Welcome;