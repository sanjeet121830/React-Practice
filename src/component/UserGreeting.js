import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLogedIn: false
        }
    }

    render() {

        const { isLogedIn } = this.state
        return (<div>
            {isLogedIn && <h1>Welcome Sanjeet</h1>}
            <button onClick={() => { this.setState({ isLogedIn: true }) }}>Login</button>
        </div>
        )
        // return (
        //     <div>
        //         {isLogedIn ?
        //             <h1>Welcome Sanjeet</h1>
        //             :
        //             <h1>Welcome Guest</h1>}
        //     </div>
        // )
        // let message;
        // if(isLogedIn)
        // {
        //     message=<h1>Welcome Sanjeet</h1>
        // }
        // else
        // {
        //     message=<h1>Welcome Guest</h1>
        // }
        // return(
        //     <div>
        //         {message}
        //     </div>
        // )
        // console.log("value of islogedIn",this.state.isLogedIn)
        // if(isLogedIn)
        // {
        //     return(<div><h1>Welcome Sanjeet</h1></div>)
        // }
        // else
        // {
        //     return(<div><h1>Welcome Guest</h1></div>)
        // }
        // return (
        //     <div>
        //         {
        //             isLogedIn ? <h1>Welcome Sanjeet</h1> : <h1>Welcome Guest</h1>
        //         }
        //         <button onClick={()=> {this.setState({isLogedIn:true})}}>Login</button>

        //     </div>
        // )
    }
}

export default UserGreeting
