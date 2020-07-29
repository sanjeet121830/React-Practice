import React from 'react'

function Person({ person }) {
    console.log("console", person)
    return (
        <div>
            <h1>i am {person.name}and i am {person.age} year old and i know {person.skills}</h1>
        </div>
    )
}

export default Person
