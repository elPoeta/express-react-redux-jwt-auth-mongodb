import React, { Component } from 'react';
import requireAuth from './requireAuth';
class Secret extends Component {
    render() {
        return (
            <h2>Welcome! to the secret feature page</h2>
        )
    }
}

export default requireAuth(Secret);