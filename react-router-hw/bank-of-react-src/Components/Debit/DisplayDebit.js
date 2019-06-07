import React ,{Component} from 'react'
import './Debit.css'

class DisplayDebit extends Component{
   
    render(){
        return(
    
        <div>
            <ul class="debit-info">
            Description:{this.props.result.description},<br/>
            Amount:{this.props.result.amount},<br/>
            Date:{this.props.result.date} <br/>
            </ul>
        </div>
        )
    }
}

export default DisplayDebit;