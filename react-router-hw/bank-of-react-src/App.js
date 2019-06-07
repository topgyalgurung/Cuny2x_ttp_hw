// Topgyal Gurung
// TTP Residency Summer 2019
// React Router, Route, Switch, Link and Redirect

import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
//import AccountBalance from './Components/AccountBalance';
import UserProfile from './Components/User/UserProfile';
import Login from './Components/User/Login'
import Debits from './Components/Debit/Debits'
import Credit from './Components/Credit/Credits'
import AccountBalance from './Components/AccountBalance';
//import DisplayDebit from './Components/DisplayDebit'

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      accountBalance:12432.25,
      currentUser:{
        userName:'topgyal',
        memberSince:'06/07/19',
      }
    }
    //this.mockLogIn=this.mockLogIn.bind(this);
  }
  mockLogIn=(logInfo)=>{
    //const newUser={..this.state.currentUser}
    const newUser=this.state.currentUser
    newUser.userName=logInfo.userName
    this.setState({currentUser:newUser})  
  }
  render(){
    const HomeComponent=()=>(<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent=()=>(
        <UserProfile userName={this.state.currentUser.userName} 
        memberSince={this.state.currentUser.memberSince}/>
    ) 
    const LogInComponent=()=>(<Login user={this.state.currentUser}mockLogIn={this.mockLogIn}/>)//{this.state.userName}/>)
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/Login" component={LogInComponent}/>
          <Route exact path="/Debits"component={Debits}/>
          <Route exact path="/Credit" component={Credit}/>
          {/* <Route exact path="/AmountBalance"component={AccountBalance}/> */}
          <Home/>
        </Switch>
      </Router>
    )
  }
}
export default App;
