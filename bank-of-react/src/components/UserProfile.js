// src/components/UserProfile.js

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>
                <Link to="/">Return to Home</Link> {' - '}
                <Link to="/login">Login</Link> {' - '}
                <Link to="/debits">Debits</Link> {' - '}
                <Link to="/credits">Credits</Link>
            </div>
        );
    }
}

export default UserProfile;