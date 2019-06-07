import React, {Component} from "react";
import './Credit.css';
class DisplayCredit extends Component{

    render(){
        return(
            <div>
                <ul class="credit-info">
               Description: {this.props.result.description}<br/>
               Amount:{this.props.result.amount}<br/>
               Date:{this.props.result.date}<br/>
               </ul>
            </div>
        )
    }
}
export default DisplayCredit;