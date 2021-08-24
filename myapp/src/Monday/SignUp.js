import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import Login from '../Monday/Login';
import LoginService from '../services/LoginService'; 

export default class SignUp extends Component{

    constructor(props){
        super(props);
        this.state={
            users:[]

        }
    }
    // handleLogin = (e)=>{
        
        handleLogin = async event => {
            event.preventDefault();
            const { email, password } = this.state;
    
            const response = await LoginService.getUsers(email, password);
            const responseJson = await response.getUsers();
    
            if (response.status !== 200) {
                this.setState({error: responseJson.error});
                alert("please use valid credentials else signup")
            } else {
                alert("logged successfully");
                this.props.history.push('/casestudy')
                // handle successful registration
            }
        }
    
        render() {
            const { error } = this.state;
    
            return (<div>
                {/* // <form onSubmit={ this.handleSubmit }> */}
                  <form  className="demoForm" onSubmit={this.handleLogin}>
              <h2>Signin Page</h2>
              
              <div className={'email'}>
                <label type="email">Email address</label>
                <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.users.email}  />
              </div>
              <div className={`password`}>
                <label type="password">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.users.password}  />
              </div>
              <input type="submit"  className="btn btn-primary"  value="Sign In"/>
            </form></div>
              
            )
        }

    }

    

    // componentDidMount(){
    //     axios.get("http://localhost:3003/users")
    //     if(){

    //     }
    //     .then(response=>{
    //             //    this.setState({users:response.data})
    //     })
    // }
    // render(){


    //     return(
    //         <div style={{ 'border':'1px solid #d6d7da'}}>
    //         <form  className="demoForm" onSubmit={this.handleLogin}>
    //           <h2>Signin Page</h2>
              
    //           <div className={'email'}>
    //             <label type="email">Email address</label>
    //             <input type="email" className="form-control" name="email" placeholder="Email" value={this.state.users.email}  />
    //           </div>
    //           <div className={`password`}>
    //             <label type="password">Password</label>
    //             <input type="password" className="form-control" name="password" placeholder="Password" value={this.state.users.password}  />
    //           </div>
    //           <input type="submit"  className="btn btn-primary"  value="Sign In"/>
    //         </form>;
    //         </div>
    //     )
    // }


