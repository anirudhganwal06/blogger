import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Login extends Component {
    render = () => {
        return (
            <section>
                <div className="container my-form">
                    <h1 className="text-center">Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="InputEmail1">Email address</label>
                            <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPassword1">Password</label>
                            <input type="password" className="form-control" id="InputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Login;
