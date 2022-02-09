import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <div className={`form-block-wrapper form-block-wrapper--is-login`} ></div>
                <section className={`form-block form-block--is-login`}>
                    <header className="form-block__header">
                        <h1>Welcome back! </h1>
                    </header>
                    <LoginForm onSubmit={this.props.outh} />
                </section>
            </div>
        )
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: "-5"
        }
    }
    auth(e) {
        e.preventDefault();
        const body = {
            email: e.target.email.value, // we are getting the email of the user from auth0
            pass: e.target.password.value
        };
        console.log(body);
        axios.post(`http://localhost:4040/auth`, body).then(axiosResponse => {
            this.setState({ redirect: axiosResponse.data.type })
        }).catch(error => alert(error));
    }
    render() {
        switch (this.state.redirect) {

            case "1":
                return <Navigate to='/Buyer' />

            case "2":
                return <Navigate to='/Seller' />
            default:
                return (
                    <form onSubmit={(e) => this.auth(e)}>
                        <div className="form-block__input-wrapper">
                            <div className="form-group form-group--login">
                                <Input type="text" id="email" label="Email" />
                                <Input type="password" id="password" label="password" />
                            </div>
                        </div>
                        <button className="button button--primary full-width" type="submit">Log In</button>
                    </form>
                )
        }

    }
}

const Input = ({ id, type, label, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled} />
);

export default Login;