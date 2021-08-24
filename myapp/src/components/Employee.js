import React, { Component } from 'react';

class Employee extends Component {

    constructor(props){
        super(props);
        this.state={id:101,name:'RAM',salary:45000};
    }

  render() {
       let {id,name,salary,children}=this.props;

       
       console.log("Employeee :"+this.props.children);


        return (
            <div  className="container" style={{color:'blue'}}>


                <h2> Employee Details as properties</h2>
                <pre>
                Employee Id     :{id} <br/> 
                Employee Name   :{name}  <br/>
                Employee Salary :{salary} <br/>
                Content         :{children} <br/>
                
                       
                </pre> 

              
                <h2> Employee Details as state</h2>
                <pre>
                Employee Id     :{this.state.id} <br/> 
                Employee Name   :{this.state.name}  <br/>
                Employee Salary :{this.state.salary} <br/>
                       
                </pre> 
                
                
            </div>
        );
    }
}

export default Employee;