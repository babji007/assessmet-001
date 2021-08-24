import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class AdminList extends Component {


    constructor(props) {
      
        super(props);

           console.log("=====UsersTable Component Created=======");
            this.state={
               title:'Admin List',
               users:[]
           }
        };
      
  //Initialization      
  componentDidMount(){
          
    
    axios.get("http://localhost:3003/users/")
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
         return     <li class="" > {u.email}</li>
     })
  
}
  </div>


</div>



      

                
           
        )
    }
}