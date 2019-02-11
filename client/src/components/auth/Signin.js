import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signin } from '../../actions';
class Signin extends Component {
    onSubmit = (formProps) => {
        this.props.signin(formProps, () => {
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
                <button>SignIn</button>
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
    connect(mapStateToProps, { signin }),
    reduxForm({ form: 'signin' })
)(Signin);