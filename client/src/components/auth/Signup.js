import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signup } from '../../actions';
class Signup extends Component {
    onSubmit = (formProps) => {
        this.props.signup(formProps, () => {
            this.props.history.push('/secret');
        });
    }
    render() {
        const { handleSubmit, errorMessage } = this.props;
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
                <div>{errorMessage}</div>
                <button>SignUp</button>
            </form>
        )
    }
}
const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    }
}
export default compose(
    connect(mapStateToProps, { signup }),
    reduxForm({ form: 'signup' })
)(Signup);