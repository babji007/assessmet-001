import { render } from '@testing-library/react';
import axios from 'axios';
import React, { Component } from 'react'
import { Link, useParams, useRouteMatch } from 'react-router-dom';

    export default class shop extends Component {
    


constructor(props){
    super(props)
    this.state={Products:[]};
}




//Initialization      
componentDidMount(){
          
    console.log(this.props);
    let {ProductId}=this.props.match.params;

    if(ProductId){
            axios.get("https://fakestoreapi.com/Products/"+ProductId)
         .then(response=>{
             this.setState({product:response.data});
         })
         console.log("=====UsersTable Component mounted=======");
        
        }

   
  }


  handleCart=(event) =>{
        event.preventDefault();
        let data = {
            "id": this.state.id,
            "title": this.state.title,
            "image": this.state.image,
            "price": this.state.price

        };
        axios.post("http://localhost:3003/cart", data)
            .then(response => {
                if (response.status === 201) {
                    console.log(this.cartFormRef);
                    this.props.dispatch({
                        type: 'ADD_TO_CART',
                        Product: response.data
                    }
                                    
                    
                    );

                
                }
            
            
            })
            .catch(error => console.error(error));
    
  }






    render(){
        let {url} =this.props.match;
        let {ProductId}=this.props.match.params;
        let {product}=this.state;
   
  
if(!ProductId)
{
    return (

        <div>
        <nav class="navbar">
<div class="container-fluid">
<ul class="nav navbar-nav">
<li ><Link to={`${url}/list`}>product List</Link></li>
<li ><Link to={`${url}/table`}>product Table</Link></li>
</ul>
</div>
</nav>
    </div> )
}
else
{
return ( <div class="container">  

       product Details
    
    <table class="table table-hover table-striped">
                         <thead>
                           <tr>
                           <th>product Id</th>
                           <th>category</th>
                           <th>price</th>
                         
                           {/* <th>View Posts</th>
                           <th>View Todos</th>
                           <th>View Albums</th>
                       */}
                           
                               
                               
                        </tr>    

                         </thead>
                         <tbody>
                          
                                   
                                        <tr>  
                                        <td>{product.id} <Link  to={`/cart`}><input type="button" value="Add To Cart" class="btn btn-danger" onClick={this.handleCart}/></Link></td>
                                        <td>{this.state.Products.price}</td>
                                        <td>{this.state.Products.title}</td>
                                        {/* console.log("this.state.Products.price"); */}
                                        </tr>
                                     )
                              
                            
                        {/* <td><Link  to={`/casestudy/posts`}  ><input type="button" value="View Posts" class="btn btn-primary"/></Link> </td>
                <td><Link  to={`/casestudy/todos`}><input type="button" value="View Todos" class="btn btn-success"/></Link> </td>
                <td><Link  to={`/casestudy/albums`}><input type="button" value="View Albums" class="btn btn-info"/></Link> </td> */}
              

            
             </tbody>
               </table>
      
                 
        
        </div>)
    
}
}

}
