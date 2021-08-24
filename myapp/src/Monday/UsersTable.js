import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class UsersTable extends Component {


    constructor(props) {
      
        super(props);

           console.log("=====UsersTable Component Created=======");
            this.state={
               title:'All Posts',
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
            <div className="container">
                <h2>{this.state.title}</h2>

              
                <table class="table table-hover table-striped">
                         <thead>
                           <tr>
                           <th>User Id</th>
                           <th>Name</th>
                           <th>Email</th>
                           <th>City</th>
                           <th>Company Name</th>
                           <th>View Posts</th>
                           <th>View Todos</th>
                           <th>View Albums</th>
                           
                           
                               
                               
                        </tr>    

                         </thead>
                         <tbody>
                          
                          {
        this.state.users.map(u=>{

        return <tr  key={u.id}>  
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.address.city}</td>
                <td>{u.company.name}</td>
                <td><Link  to={`/casestudy/posts?userId=${u.id}`}  ><input type="button" value="View Posts" class="btn btn-primary"/></Link> </td>
                <td><Link  to={`/casestudy/todos`}><input type="button" value="View Todos" class="btn btn-success"/></Link> </td>
                <td><Link   to={`/casestudy/albums`}><input type="button" value="View Albums" class="btn btn-info"/></Link> </td>
                </tr>

            })
              }

             </tbody>
               </table>
      

                
            </div>
        )
    }
}