import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';


class Home extends Component{
    render(){
        return(
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkD0O1EvE9xLlFQ7tXwGUl9l--oTzk1eWWZ8_d9Ia4TYg1g0IJQ" alt="bank"/>
            <h1 id="content">Bank of React</h1>
            <div id="tags">
            <Link to="/Login">Login</Link><br/>
            <Link to= "/userProfile">User Profile </Link><br/>
            <Link to="/Debits">Debits</Link><br/>
            <Link to="/Credit">Credits</Link>
            </div>
        </div>
        )}
}
export default Home;
