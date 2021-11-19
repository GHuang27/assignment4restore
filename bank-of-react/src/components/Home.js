// src/components/Home.js
    
import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
    
class Home extends Component {
    render() {
        return (
            <div>
                <h1>Bank of React</h1>
                <br />
                <Link to="/userProfile">User Profile</Link> {' - '}
                <Link to="/login">Login</Link> {' - '}
                <Link to="/debits">Debits</Link> {' - '}
                <Link to="/credits">Credits</Link>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        );
    }
}

export default Home;