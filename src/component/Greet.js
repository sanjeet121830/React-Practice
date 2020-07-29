import React from 'react'

function Greet(props) {
    const {fname,lname}=props
    console.log("props value:", lname,fname)
    return (
        <div>
            <h1>Hello {fname} {lname}</h1>
        </div>
    )
}

export default Greet
