import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['sanjeet', 'Ajeet', 'Ranjeet','sanjeet']
    const persons = [
        {
            id: 1,
            name: 'sanjeet',
            age: '25',
            skills: 'React'
        },
        {
            id: 2,
            name: 'Ajeet',
            age: '26',
            skills: 'Angular'
        },
        {
            id: 3,
            name: 'Ranjeet',
            age: '30',
            skills: 'Viu.js'
        },

    ]
    // const nameList = names.map(name => { return (<h1>{name}</h1>) })
    // const nameList = persons.map(person => <Person key={person.id} person={person} />)
const nameList=names.map((name,index) => <h1 key={index}>{index} {name}</h1>)
    return (
        <div>
            {nameList}

        </div>
    )
}

export default NameList
