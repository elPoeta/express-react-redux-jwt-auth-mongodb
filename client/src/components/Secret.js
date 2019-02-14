import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from './requireAuth';
import { secretAction } from '../actions';
class Secret extends Component {
    async componentDidMount() {
        await this.props.secretAction(localStorage.getItem('token'));
    }
    render() {
        return (
            <h2> :> {this.props.secret}</h2>
        )
    }
}
const mapStateToProps = state => {
    return {
        secret: state.auth.secret
    }
}
export default connect(mapStateToProps, { secretAction })(requireAuth(Secret));
