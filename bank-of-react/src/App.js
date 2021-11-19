import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountBalance: 500,
      currentUser: {
        userName: 'Bob',
        memberSince: '07/23/96',
      },
      newItem: {
        description: '',
        amount: 0,
        date: '',
      },
      debits: [],
      credits: []
    }
  }

  async componentDidMount() {
    let debits = await axios.get("https://moj-api.herokuapp.com/debits");
    let credits = await axios.get("https://moj-api.herokuapp.com/credits");

    debits = debits.data
    credits = credits.data

    let debitSum = 0, creditSum = 0;
    debits.forEach((debit) => {
      debitSum += debit.amount
    })
    credits.forEach((credit) => {
      creditSum += credit.amount
    })

    let accountBalance = creditSum - debitSum;
    this.setState({debits, credits, accountBalance});
  }

  addDebit = (e) => {
    //send to debits view view props
    //updates state based off user input
    let debits = this.state.debits;
    let accountBalance = this.state.accountBalance;
    const tempItem = {...this.state.newItem}
    const today = new Date();
    tempItem.id = today.toString().slice(0,36);
    tempItem.description = e.item
    tempItem.amount = e.cost
    tempItem.date = today.toLocaleString().slice(0,10);
    accountBalance += parseInt(tempItem.amount);
    debits.push(tempItem);
    this.setState({debits, accountBalance});
  }

  addCredit = (e) => {
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render () {
    const { debits } = this.state;
    const { credits } = this.state;
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
    const DebitsComponent = () => (<Debits addDebit={this.addDebit} debits={debits} accountBalance={this.state.accountBalance}/>)
    const CreditsComponent = () => (<Credits addCredit={this.addCredit} credits={credits} accountBalance={this.state.accountBalance}/>)
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
        </Switch>
        
      </Router>
    );
  }
}

export default App;
