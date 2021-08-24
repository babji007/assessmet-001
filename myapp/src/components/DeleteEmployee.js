import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class DeleteEmployee extends Component {
    
    constructor(props) {
        super(props)
      
    };
      
  
componentDidMount(){
   
    const query = new URLSearchParams(this.props.location.search);

    let employeeId=query.get("employeeId");
     console.log(this.props);

    EmployeeService.deleteEmployee(employeeId)
    .then(response=>{
       console.log(this.props);
       //redirect to Employee Table Component
       this.props.history.push("/employees");   //Programtical routing
    });

    
    }

  
      render() {
          return (
              <div className="text-info">
              <h2>Deleting the Employee</h2>
  
</div>
         )
      }
}
