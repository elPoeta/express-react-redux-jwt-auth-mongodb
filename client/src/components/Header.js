import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';
class Header extends Component {
    renderLinks = () => {
        if (this.props.authenticated) {
            return (
                <div>
                    <Link to="/signout">Sign Out</Link>
                    <Link to="/feature">Feature</Link>
                    <Link to="/secret">Secret</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            );
        }
    }
    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Redux Auth</Link>
                    {this.renderLinks()}
                </nav>
            </header>
        )
    }
}
const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    }
}
export default connect(mapStateToProps)(Header);
