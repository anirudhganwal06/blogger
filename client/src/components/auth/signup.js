import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { signup } from '../../actions/auth'
import validateSignupInput from '../../validation/signup';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password1: '',
            password2: '',
            isChanged: {
                name: false,
                username: false,
                email: false,
                password1: false,
                password2: false
            },
            errors: {},
            loading: false
        }
    }

    componentDidMount = () => {
        console.log('componentDidMount');
        console.log(this.props);
        if (this.props.auth.isLoggedIn) {
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange = event => {
        const newState = {
            ...this.state,
            [event.target.name]: event.target.value,
            isChanged: {
                ...this.state.isChanged,
                [event.target.name]: true
            }
        };
        const { errors } = validateSignupInput(newState);
        this.setState({
            [event.target.name]: event.target.value,
            isChanged: {
                ...this.state.isChanged,
                [event.target.name]: true
            },
            errors: errors
        });
    }


    onSubmit = async event => {
        event.preventDefault();
        await this.setState({
            loading: true
        });
        const newUserData = {
            ...this.state
        }
        await this.props.signup(newUserData);
        await this.setState({
            loading: false
        });
    }

    render = () => {
        const { errors } = this.state;

        let button = '';
        if (this.state.loading) {
            button = (
                <button className="btn btn-primary" type="button" disabled>
                    Signing Up...
                    <span className="spinner-border spinner-border-sm ml-3" role="status" aria-hidden="true"></span>
                </button>
            );
        } else {
            button = (
                <button type="submit" className="btn btn-primary">Sign Up</button>
            );
        }

        return (
            <section>
                <div className="container my-form">
                    <h1 className="text-center">Sign Up</h1>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" className={classnames("form-control", { "is-invalid": errors.name })} id="name" placeholder="Name" onChange={this.onChange} />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input type="text" name="username" className={classnames("form-control", { "is-invalid": errors.username })} id="username" placeholder="User Name" onChange={this.onChange} />
                            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                            <small id="usernameHelp" className="form-text text-muted">Your username should be unique!</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputEmail1">Email address</label>
                            <input type="email" name="email" className={classnames("form-control", { "is-invalid": errors.email })} id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChange} />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPassword1">Password</label>
                            <input type="password" name="password1" className={classnames("form-control", { "is-invalid": errors.password1 })} id="InputPassword1" placeholder="Password" onChange={this.onChange} />
                            {errors.password1 && <div className="invalid-feedback">{errors.password1}</div>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputPassword2">Confirm Password</label>
                            <input type="password" name="password2" className={classnames("form-control", { "is-invalid": errors.password2 })} id="InputPassword2" placeholder="Confirm Password" onChange={this.onChange} />
                            {errors.password2 && <div className="invalid-feedback">{errors.password2}</div>}
                        </div>
                        {button}
                    </form>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        errors: state.errors,
    }
}

export default connect(mapStateToProps, { signup })(Signup);
