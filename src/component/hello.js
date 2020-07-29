import React from "react";
const Hello = (props) => {
    // return React.createElement('div' ,{className:"myApp"} , React.createElement("h1",{id:"hello"},"hello this Create Element Method"))
    console.log("value of props", props.name)
    return (
        <div>
            <h2>Hello {props.name} {props.lastName}</h2>
            {props.children}
           <h2>{props.children}</h2> 
        </div>
    )
}
export default Hello;