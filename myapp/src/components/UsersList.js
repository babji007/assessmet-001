import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class UsersList extends Component {


    constructor(props) {
      
        super(props);

           console.log("=====UsersTable Component Created=======");
            this.state={
               title:'Users List',
               users:[]
           }
        };
      
  //Initialization      
  componentDidMount(){
          
    
    axios.get("https://jsonplaceholder.typicode.com/users")
         .then(response=>{
             this.setState({users:response.data});
         })
         console.log("=====UsersTable Component mounted=======");
        
   
  }
  
  
  componentWillUnmount(){
      console.log("=====EmployeeTable Component  willUnMount=======");  
  }
  
  
  componentDidUpdate(){
      console.log("=====EmployeeTable Component  didUpdate=======");    
  }
  


  render() {
        return (
           
              
              
                <div class="container">
   <h2>{this.state.title}</h2>

  <div class="list-group">
{
     this.state.users.map(u=>{
         return     <li class="" ><Link to={`${u.id}`}> {u.username}</Link></li>
     })
  
}
  </div>


</div>



      

                
           
        )
    }
}