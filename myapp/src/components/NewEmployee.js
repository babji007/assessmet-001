import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class NewEmployee extends Component {
    
    constructor(props) {
        super(props)
      
        this.state = {
         id:0,
         name:'',
         salary:0,
         doj:new Date().toLocaleDateString() 
         };
    };
        
  
      handleInputChange=(e)=>{
          this.setState({
             [e.target.name]:e.target.value
          })
      }
  
       
        
      handleSubmit=(event) =>{
        event.preventDefault();
       

        EmployeeService.addEmployee(this.state)
                  .then(response=>{
                      this.props.history.push("/employees");
                  })
                  
                  
      }
  
      render() {
          return (
              <div className="container">
              <h2>Employee Form </h2>
  
  <form  onSubmit={this.handleSubmit}>
  
  
  <div className="form-group">
  <label>Employee Id</label>     
  <input defaultValue={this.state.id}  name="id"   onChange={this.handleInputChange} />
  </div>
  
  <div className="form-group">
  <label>Employee Name</label>     
  <input  defaultValue={this.state.name}  name="name" onChange={this.handleInputChange}/>
  </div>
  
  <div className="form-group">
  <label>Employee Salary </label>     
  <input defaultValue={this.state.salary} name="salary" onChange={this.handleInputChange}/>
  </div>

  <div className="form-group">
  <label>Employee DOJ </label>     
  <input defaultValue={this.state.doj} name="doj" onChange={this.handleInputChange}/>
  </div>

  
  <button type="submit" className="btn btn-primary">Add Employee</button>
  </form>
</div>
         )
      }
}
