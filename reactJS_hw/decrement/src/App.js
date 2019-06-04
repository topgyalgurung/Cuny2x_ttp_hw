/*
Topgyal Gurung
Decrement Component
React JS 
*/

import React, {Component }from 'react';
import './App.css';

class Decrement extends Component{
  constructor(props){
   super(props);
    this.state={
      number:0,
    };
  }
   increment=()=>{
    this.setState({number:this.state.number + 1});
  }
  decrement=()=>{
    if(this.state.number==0){
      alert("cannot be less than zero");
      return;
    }
    this.setState({number:this.state.number-1});
  }
  handleChange=(event)=>{
    this.setState({number:event.target.value});
  }
  render(){
    let{number}=this.state
    return(
      <div>
        Number: {this.state.number}<br/>
       <button id="button" onClick={this.increment}>Increment</button>
       <button onClick={this.decrement}>Decrement</button>
       </div>
    )
    }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Decrement/>
      </header>
    </div>)
};

export default App;
