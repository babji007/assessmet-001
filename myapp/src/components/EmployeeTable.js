import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default class EmployeeTable extends Component {


    constructor(props) {
      
        super(props);

           console.log("=====EmployeeTable Component Created=======");
            this.state={
               title:'React - Ajax -Employee CRUD Application',
               employees:[]
           }

        };
      
  //Initialization      
  componentDidMount(){
          
    EmployeeService.getEmployees()
                   .then(response=>{
                       this.setState({
                           employees:response.data
                       })
                   });

   

  }
  
  
  componentWillUnmount(){
      console.log("=====EmployeeTable Component  willUnMount=======");  
  }
  
  
  componentDidUpdate(){
      console.log("=====EmployeeTable Component  didUpdate=======");    
  }
  


  render() {
        return (
            <div className="container">
                <h2>{this.state.title}</h2>

              

<Link  to={'/newEmployee'}  ><input type="button" value="Add Employee" class="btn btn-primary"/></Link>
              
                <table class="table table-hover table-striped">
                         <thead>
                           <tr>
                           <th>Employee Id</th>
                           <th>Employee Name</th>
                           <th>Employee Salary</th>
                           <th>Date of Joining</th>
                           <th>Edit Employee</th>
                           <th>Delete Employee</th>
                           
                           
                               
                               
                        </tr>    

                         </thead>
                         <tbody>
                          
                          {
        this.state.employees.map(e=>{

        return <tr  key={e.id}>  
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.salary}</td>
                <td>{e.doj}</td>
                <td><Link  to={`/editEmployee?employeeId=${e.id}`}  ><input type="button" value="Edit Employee" class="btn btn-primary"/></Link> </td>
                <td><Link  to={`/deleteEmployee?employeeId=${e.id}`}><input type="button" value="Delete Employee" class="btn btn-danger"/></Link> </td>
                </tr>
            })


              }


                         </tbody>
                     </table>
      

                
            </div>
        )
    }
}