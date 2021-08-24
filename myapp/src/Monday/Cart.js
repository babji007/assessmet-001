import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import EmployeeService from '../services/EmployeeService';
export default class Cart extends Component {


    constructor(props) {
      
        super(props);

           console.log("=====EmploTable Component Created=======");
            this.state={
               title:'Cart List',
               cart:[ ]
           }
        };
      
  //Initialization      
  componentDidMount(){
          
    
    axios.get('http://localhost:3003/cart')
    
         .then(response=>{
            console.log("=====EmploTable 111111111Component mounted=======");
             this.setState({cart:response.data});
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
     this.state.cart.map(u=>{
         return    (
         <div className="four column grid"   >
                                <div className="ui link cards" >
                                  <div className="card" >
                                  
                                        <div className="image"><Link to={`${u.id}`}>
                                <img class="card-img-top" src={u.image} alt="Card image" style={{width:"40%"}} > 
                                 </img></Link>
                                <div className="cardBody" style={{backgroundColor:"black", width:"40%"}}>
                                  {/* <h4 className="cardTitle">{ u.category}</h4> */}
                                     <p className="cardText">${u.price}</p>
                                     {/* <a href="/cart" style={{align :"center"}} class="btn btn-primary">Add to Cart</a> */}
                                     
                                     <td><Link  to={`/deleteProduct?ProductId=${u.id}`}><input type="button" value="Delete from cart" class="btn btn-danger"/></Link> </td>
                                 {/* <a href="#" class="btn btn-primary">See Profile</a> */}
                                    </div>
                                    </div>    
                                    
                                    </div>
                                    </div>
                                    </div> 
      ) })
    
  
}
  </div>


</div>



      

                
           
        )
    }
}