import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class EmpTable extends Component {


    constructor(props) {
      
        super(props);

           console.log("=====EmpTable Component Created=======");
            this.state={
               title:'All Emp',
               employees:[],
              
           }
           

        };
      
  //Initialization      
  componentDidMount(){
          

    axios.get("http://localhost:3003/employees")
         .then(response=>{
             this.setState({employees:response.data});
         })
         console.log("=====emploTable Component mounted=======");
        
   
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
              
              
                <table class="table table-hover table-striped">
                         <thead>
                           <tr>
                           <th> Id</th>
                           <th>Name</th>
                           <th>Salary</th>
                           <th>DOJ</th>
                           
                           
                               
                        </tr>    

                         </thead>
                         <tbody>
                          
                          {
        this.state.employees.map(u=>{

        return <tr  key={u.id}>  
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.salary}</td>
                <td>{u.doj}</td>
               
                {/* <td><Link  to={`/casestudy/posts?userId=${u.id}`}  ><input type="button" value="View Posts" class="btn btn-primary"/></Link> </td>
                <td><Link  to={`/casestudy/todos`}><input type="button" value="View Todos" class="btn btn-success"/></Link> </td>
                <td><Link   to={`/casestudy/albums`}><input type="button" value="View Albums" class="btn btn-info"/></Link> </td> */}
                </tr>

            })
              }

             </tbody>
               </table>
      

                
            </div>
        )
    }
}