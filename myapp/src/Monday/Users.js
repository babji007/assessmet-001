import { render } from '@testing-library/react';
import axios from 'axios';
import React, { Component } from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom';

    export default class Users extends Component {
    


constructor(props){
    super(props);
    this.state={user:{}};
}




//Initialization      
componentDidMount(){
          
    console.log(this.props);
    let {userId}=this.props.match.params;

    if(userId){
            axios.get("https://jsonplaceholder.typicode.com/users/"+userId)
         .then(response=>{
             this.setState({user:response.data});
         })
         console.log("=====UsersTable Component mounted=======");
        
        }

   
  }






    render(){
        let {url} =this.props.match;
        let {userId}=this.props.match.params;
        let {user}=this.state;
  
if(!userId)
{
    return (

        <div>
        <nav class="navbar">
<div class="container-fluid">
<ul class="nav navbar-nav">
<li ><Link to={`${url}/list`}>Users List</Link></li>
<li ><Link to={`${url}/table`}>Users Table</Link></li>
</ul>
</div>
</nav>
    </div> )
}
else
{
return ( <div class="container">  

       User Details
    
    <table class="table table-hover table-striped">
                         <thead>
                           <tr>
                           <th>User Id</th>
                           <th>Name</th>
                           <th>Email</th>
                         
                           <th>View Posts</th>
                           <th>View Todos</th>
                           <th>View Albums</th>
                      
                           
                               
                               
                        </tr>    

                         </thead>
                         <tbody>
              <tr>  
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><Link  to={`/casestudy/posts`}  ><input type="button" value="View Posts" class="btn btn-primary"/></Link> </td>
                <td><Link  to={`/casestudy/todos`}><input type="button" value="View Todos" class="btn btn-success"/></Link> </td>
                <td><Link  to={`/casestudy/albums`}><input type="button" value="View Albums" class="btn btn-info"/></Link> </td>
                </tr>

            
             </tbody>
               </table>
      
                 
        
        </div>)
    
}
}

}
