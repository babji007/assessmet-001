import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class EditEmployee extends Component {
    
    constructor(props) {
        super(props)
      
        this.state = {
         id:0,
         name:'',
         salary:0,
         doj:new Date().toLocaleDateString()
         };
    };
      
  
componentDidMount(){
    const query = new URLSearchParams(this.props.location.search);
    let employeeId=query.get("employeeId");

    EmployeeService.getEmployeeById(employeeId)
    .then(response=>{
      this.setState({
        id:response.data.id,
        name:response.data.name,
        salary:response.data.salary,
        doj:response.data.doj 
      })


    })

}


  
      handleInputChange=(e)=>{
          this.setState({
             [e.target.name]:e.target.value
          })
      }
  
   
      
        
      handleSubmit=(event) =>{
        event.preventDefault();

        EmployeeService.updateEmployee(this.state.id,this.state)
                  .then(response=>{
                      this.props.history.push("/employees");
                  })
         
      }
  
      render() {
          return (
              <div className="container text-info">
              <h2>Update Employee Form </h2>
  
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

  
  <button type="submit" className="btn btn-info">Update Employee</button>
  </form>
</div>
         )
      }
}
