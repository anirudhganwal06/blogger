const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateSignupInput = data => {
    let errors = {};

    data.name = isEmpty(data.name) ? '' : data.name;
    data.username = isEmpty(data.username) ? '' : data.username;
    data.email = isEmpty(data.email) ? '' : data.email;
    data.password1 = isEmpty(data.password1) ? '' : data.password1;
    data.password2 = isEmpty(data.password2) ? '' : data.password2;

    if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
        errors.name = 'Name must be between 3  and 30 characters'
    }
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required'
    }
    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username field is required'
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required'
    }
    if (!Validator.isLength(data.password1, { min: 6, max: 30 })) {
        errors.password1 = 'Password must be between 6 to 30 characters';
    }
    if (Validator.isEmpty(data.password1)) {
        errors.password1 = 'Password field is required';
    }
    console.log(data.password2);
    if (Validator.isEmpty(data.password2)) {
        console.log('a');
        errors.password2 = 'Confirm Password field is required';
    } else {
        if (!Validator.equals(data.password1, data.password2)) {
            console.log('b');
            errors.password2 = 'Passwords must match';
        }
    }

    return ({
        errors,
        isValid: isEmpty(errors)
    })
}

module.exports = validateSignupInput;