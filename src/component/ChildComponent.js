import React from 'react'

function ChildComponent({greetParent}) {
    return (
        <div>
            <button onClick={() => greetParent("i from child component")}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
