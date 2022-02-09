import React, { Component } from 'react'
import { Navigate } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false
        }

    }
    changeUser = () => {
        alert("hi")
        this.setState({
            user: true
        })
    }
    render() {
        if (this.state.user) {
            // not logged in so redirect to login page with the return url
            return <Navigate to='/login' />
        }
        return (
            <button onClick={() => this.changeUser()}>click</button>
        )

    }
}



