import React, { Component } from 'react'

class Message extends Component {

    // class constructor, inside we create state object and initialize it
    constructor() {
        super()
        // state object, initializing state values
        this.state = {
            message: 'Welcome visitor'
        }
    }

    // call this method to change state message
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

// remember: return must be 1 big element (div)
    render () {
        return (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message