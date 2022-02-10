import React, { Component } from 'react'
import { Navigate } from "react-router-dom";

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false
        }

    }

    render() {
        // not logged in so redirect to login page with the return url
        return <Navigate to='/login' />

    }
}



