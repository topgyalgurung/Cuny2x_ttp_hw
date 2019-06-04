/*
Topgyal Gurung
ReactJS Contact Cards Exercise
Props and Proptypes
*/

import React, {Component,PropTypes}from 'react';
import './App.css';

class ContactCard extends Component{
  constructor(props){
  super(props);
  // ContactCard.PropTypes={ name=PropTypes.name.required,.. }
    this.state={
      name:props.name.required,
      number:props.number.required,
      workNum:props.workNum,
      email:props.email.required
      };
  }
render(){
  return(
    <h1 align="center"> Contact Card
   <div align="center" class="container">
    <label id="name">Enter Name: {this.props.name}</label>  <br/>
    <label id="number">Mobile Number:{this.props.number}</label> <br/>
    <label id="workNum">Work Number:{this.props.workNum}</label> <br/>
    <label id="email">Email:{this.props.email}</label>
  </div>
  </h1>
  )}
}
class App extends Component{
  render(){
    return (
    <div>
      <ContactCard name="topgyal" number="347-999-999" workNum="347-1111-111"email="topgyaltsering3@gmail.com"/>
      <ContactCard name= "Sam" number="347-132-3525" email="sam@gmail.com"/>
      <ContactCard name="John" number="917-322-3523" email="john@gmail.com"/>
      </div>)
  }
}

export default App;
