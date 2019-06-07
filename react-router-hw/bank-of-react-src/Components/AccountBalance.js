import React, { Component } from "react";

class AccountBalance extends Component{
    
    render(){
        return(
            <div>
 {/*  my Debits subtracted from my Credits
AND I should be able to see a negative account balance if I have more Debits than Credits */}
               Account Balance:{this.props.accountBalance}
            </div>
        )
    }
}
export default AccountBalance;