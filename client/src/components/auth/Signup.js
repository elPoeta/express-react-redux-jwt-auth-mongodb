import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signup } from '../../actions';
class Signup extends Component {
    onSubmit = (formProps) => {
        console.log(formProps);
        this.props.signup(formProps);
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name='email'
                        type='email'
                        component='input'
                        autoComplete='none'
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name='password'
                        type='password'
                        component='input'
                        autoComplete='none'
                    />
                </fieldset>
                <button>SignUp</button>
            </form>
        )
    }
}

export default compose(
    connect(null, { signup }),
    reduxForm({ form: 'signup' })
)(Signup);