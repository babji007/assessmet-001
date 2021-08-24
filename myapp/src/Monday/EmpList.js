import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import EmployeeService from '../services/EmployeeService';
export default class EmpList extends Component {


    constructor(props) {
      
        super(props);

           console.log("=====EmploTable Component Created=======");
            this.state={
               title:'Employees List',
               employees:[]
           }
        };
      
  //Initialization      
  componentDidMount(){
          
    
    axios.get('http://localhost:3003/employees')
    
         .then(response=>{
            console.log("=====EmploTable 111111111Component mounted=======");
             this.setState({employees:response.data});
         })
         console.log("=====EmploTable Component mounted=======");
        
   
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
   {/* <h2>{this.state.employees.id}</h2> */}

  <div class="list-group">
{    
     this.state.employees.map(e=>{
         return    <li class="" ><Link to={`${e.id}`}> {e.name}</Link></li>
     })
  
}
  </div>


</div>



      

                
           
        )
    }
}