import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Credits = (props) => {
    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description}</li>
        })
    }
    return (
        <div>
            <h1> Credits </h1>
            {creditsView()}
            <Link to="/">Home</Link>
            <Link to="/userProfile">User Profile</Link>
            <Link to="/login">Login</Link>
            <Link to="/debits">Debits</Link>
        </div>

    )
}
export default Credits;