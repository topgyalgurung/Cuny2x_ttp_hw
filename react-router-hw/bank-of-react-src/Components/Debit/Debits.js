import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
//import {Redirect} from 'react-router-dom'

import DisplayDebit from './DisplayDebit';

class Debits extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            descrip:this.props.descrip,
            amount:this.props.amount,
        }
        this.addData=this.addData.bind(this);
        this.save=this.save.bind(this);
    }
    addData(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    save(){
        this.setState({
            descrip:this.state.descrip,
            amount:this.state.amount,
        })
        // return(<div>
        //     <p1> {document.write("Description: ",this.state.descrip)}</p1>
        //     <p2>{document.write(", Amount: ",this.state.amount)}</p2>
        //     <p3>{document.write(", Date: ",new Date().toLocaleDateString())}</p3>
        // </div>)
       // return React.createElement('div',{className:"div"},this.props.descrip)
    }
    fetchDebit = () =>{
        axios.get("https://moj-api.herokuapp.com/debits")
            .then(response=>{
                this.setState({
                    data:response.data
                });
                console.log(response.data);
            }).catch(error=>console.log(error));
    }
    relevantdata = () => {
        console.log('rel data', this.state.data)
        return this.state.data.map((_data,id)=>{
            let temp={};
            temp.description=_data.description;
            temp.amount=_data.amount;
            temp.date=_data.date;

            return (<DisplayDebit key={id} result={temp}/>)
        })
    }
    // showBalance=()=>{
    //     return(<Redirect to="/AccountBalance"></Redirect>)
    // }
    render(){
        let results=this.relevantdata();
        console.log(results)
        return(
            <div> 
                <Link to="/Home">Home</Link> <br/>
                <h1>Debits</h1> 
                Description:<br/><input id="input-descrp" type="text" name="descrip" value={this.state.descrip} onChange={this.addData}/>  <br/>
                Amount:<br/><input id="input-amt" name="amount" value={this.state.amount} onChange={this.addData}/> 
               <br/> <button id="add" onClick={this.save}>Add Description</button><br/>
               <br/><button onClick={this.fetchDebit}> View Results </button>
                {results} 

                {this.state.accountBalance}
            </div>
        )
    }
}

export default Debits;