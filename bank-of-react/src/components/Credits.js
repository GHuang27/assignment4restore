import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
    const [item, updateName] = useState('');
    const [cost, updateCost] = useState('');

    let creditsView = () => {
        const { credits } = props;
        return credits.map((credit) => {
            let date = credit.date.slice(0,10);
            return <li key={credit.id}>{credit.amount} {credit.description} {date}</li>
        })
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();
        const newCredit = {item, cost};
        props.addCredit(newCredit)
    }

    return (
        <div>
            <h1> Credits </h1>
            {creditsView()}
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    Credit Name
                </label>
                <input type="text" name="item" onChange={(e) => updateName(e.target.value)}/>
                <label>
                    Amount
                </label>
                <input type="text" name="cost" onChange={(e) => updateCost(e.target.value)}/>
                <button>Add</button>
            </form>
            <br />
            <Link to="/">Home</Link> {' - '}
            <Link to="/userProfile">User Profile</Link> {' - '}
            <Link to="/login">Login</Link> {' - '}
            <Link to="/debits">Debits</Link>
            <AccountBalance accountBalance={props.accountBalance}/>
        </div>
    )
}
export default Credits;