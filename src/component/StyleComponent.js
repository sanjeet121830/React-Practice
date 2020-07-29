import React from 'react'
import './MyStyle.css'

function StyleComponent(props) {
    let className =props.primary ? "primary"  : " "
    return (
        <div>
            {/* two classes of css are used in single className attributr */}
           <h1 className={`${className} font-xl`}>StyleSheet</h1>       
    
        </div>
    )
}

export default StyleComponent
