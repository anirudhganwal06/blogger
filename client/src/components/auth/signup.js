import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { signup } from '../../actions/auth'


class Signup extends Component {
    state = {
        name: '',
        username: '',
        email: '',
        password1: '',
        password2: '',
        errors: {}
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = event => {
        event.preventDefault();
        const newUserData = {
            ...this.state
        }
        console.log(newUserData);
        this.props.signup(newUserData);
        console.log('Clicked');
    }

    render = () => {
        const { errors } = this.state;
        // console.log('start');
        // console.log(errors);
        // console.log('end');
        return (
            <section>
                <div className="container my-form">
                    <h1 className="text-center">Sign Up</h1>
                    <h1>{errors.username}</h1>
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
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { signup })(Signup);
