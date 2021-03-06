// src/components/AccountBalance.js

import React, {Component} from 'react';

class AccountBalance extends Component {
    render() {
        return (
            <div>
                <h2>Account Balance</h2>
                Balance: {this.props.accountBalance.toFixed(2)}
            </div>
        );
    }
}

export default AccountBalance;