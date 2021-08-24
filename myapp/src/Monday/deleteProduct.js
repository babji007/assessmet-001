import React, { Component } from 'react'
import ProductService from '../services/ProductService';

export default class deleteProduct extends Component {
    
    constructor(props) {
        super(props)
      
    };
      
  
componentDidMount(){
   
    const query = new URLSearchParams(this.props.location.search);

    let ProductId=query.get("ProductId");
     console.log(this.props);

    ProductService.deleteProduct(ProductId)
    .then(response=>{
       console.log(this.props);
       if (response.status === 200) {
       
        this.props.dispatch({
            type: 'DEL_TO_CART',
            Product: response.data
            
        },
        this.props.history.push("/cart"),
        alert("product deleted from cart")
       //redirect to Employee Table Component
        //Programtical routing
    );
       }
    })
    .catch(error => console.error(error));
}

  
      render() {
          return (
              <div className="text-info">
              <h2>Deleting the Product.......</h2>
  
</div>
         )
      }
}
