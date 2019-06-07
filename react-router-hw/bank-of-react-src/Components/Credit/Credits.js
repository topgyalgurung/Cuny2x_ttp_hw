import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import Axios from 'axios';
import DisplayCredit from './DisplayCredit';

let creditApi="https://moj-api.herokuapp.com/credits";

class Credits extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
        }
    }
   // componentDidCatch({ })
    getCredit=()=>{
        Axios.get(creditApi).then((response)=>{
            this.setState({
                data:response.data,
            });
        }).catch(error=>console.log(error))
    }
    relevantData=()=>{
        return this.state.data.map((d,i)=>{
            let temp={};
            temp.description=d.description;
            temp.amount=d.amount;
            temp.date=d.date;
            return(<DisplayCredit key ={i} result={temp} />)
        })

    }
    render(){
        let result=this.relevantData();
        return(
            <div>
            <Link to="/Home">Home</Link>
            <h1>Credits</h1>
            <button onClick={this.getCredit}>Get Data</button>
            {result}
            </div>
        )
    }
}
export default Credits;