import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Debits = (props) => {
    const [item, updateName] = useState('');
    const [cost, updateCost] = useState('');

    let debitsView = () => {
        const { debits } = props;
        return debits.map((debit) => {
            let date = debit.date.slice(0,10);
            return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
        })
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();
        const newDebit = {item, cost};
        props.addDebit(newDebit)
    }

    return (
        <div>
            <h1> Debits </h1>
            {debitsView()}
            <br />
            <form onSubmit={handleSubmit}>
                <label>
                    Debit Name
                </label>
                <input type="text" name="item" onChange={(e) => updateName(e.target.value)}/>
                <label>
                    Amount
                </label>
                <input type="text" name="cost" onChange={(e) => updateCost(e.target.value)}/>
                <button>Add</button>
            </form>
            <div>
                <br />
                <Link to="/">Home</Link> {' - '}
                <Link to="/userProfile">User Profile</Link> {' - '}
                <Link to="/login">Login</Link> {' - '}
                <Link to="/credits">Credits</Link>
                <AccountBalance accountBalance={props.accountBalance}/>
            </div>
        </div>
    )
}
export default Debits;