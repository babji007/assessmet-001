import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class ShopList extends Component {


    constructor(props) {
      
        super(props);

           console.log("=====UsersTable Component Created=======");
            this.state={
               title:'products List',
               Products:[]
           }
        };
      
  //Initialization      
  componentDidMount(){
          
    
    axios.get("https://fakestoreapi.com/Products/")
         .then(response=>{
             this.setState({Products:response.data});
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
     this.state.Products.map(u=>{
         return     <li class="" ><Link to={`${u.id}`}> {u.id}</Link></li>
     })
  
}
  </div>


</div>



      

                
           
        )
    }
}