import axios from 'axios';
        import React, { Component } from 'react'
        import { Link } from 'react-router-dom';
        
        
        export default class fakeshop extends Component {
        
        
            constructor(props) {
              
                super(props);
        
                   console.log("=====UsersTable Component Created=======");
                    this.state={
                       title:'Products List',
                       Products:[]
                   }
                };
              
          //Initialization      
          componentDidMount(){
            // console.log(this.props);
            // let {productId}=this.props.match.params;    
            
            axios.get("https://fakestoreapi.com/Products/")
                 .then(response=>{
                     this.setState({Products:response.data});
                 })
                 console.log("=====ProductsTable Component mounted=======");
                
           
          }
          handleCart=(event) =>{
            event.preventDefault();
            // let data ={
            //     "id":this.id,
            //     "title": this.title,
            //     "image": this.image,
            //     "price": this.price
    
            // };
            axios.post("http://localhost:3003/cart")
                .then(response => {
                    if (response.status === 201) {
                        console.log(this.cartFormRef);
                        this.props.dispatch({
                            type: 'ADD_TO_CART',
                            Product: response.data
                           
                        },
                        alert("product added to cart")
                                        
                        
                        );
    
                    
                    }
                
                
                })
                .catch(error => console.error(error));
        
      }
          
          
          componentWillUnmount(){
              console.log("=====EmployeeTable Component  willUnMount=======");  
          }
          
          
          componentDidUpdate(){
              console.log("=====EmployeeTable Component  didUpdate=======");    
          }
          
        
        
          render() {

      //       let itemList = this.props.items.map(item=>{
      //         return(
      //             <div className="card" key={item.id}>
      //                     <div className="card-image">
      //                         <img src={item.img} alt={item.title}/>
      //                         <span className="card-title">{item.title}</span>
      //                         <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"<i className="material-icons">add</i></span>
      //                     </div>
  
      //                     <div className="card-content">
      //                         <p>{item.desc}</p>
      //                         <p><b>Price: {item.price}$</b></p>
      //                     </div>
      //              </div>
      //         )
      //     })
      //     return(
      //         <div className="container">
      //             <h3 className="center">Our items</h3>
      //             <div className="box">
      //                 {itemList}
      //             </div>
      //         </div>
      //     )
      // }
      

















        //     let {url} =this.props.match;
        // let {productId}=this.props.match.params;
        // let {products}=this.state;
                return (
                   
                      
                      
         <div class="container">
           {/* <div class="card" style="width:400px"> */}
    {/* <img class="card-img-top" src="img_avatar1.png" alt="Card image" style="width:100%"> */}
    {/* <div class="card-body">
      <h4 class="card-title">John Doe</h4>
      <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
      <a href="#" class="btn btn-primary">See Profile</a>
    </div> */}

                           
  
           <h2>{this.state.title}</h2>
          
         {
           this.state.Products.map(u=>{

                         return  <div className="four column grid">  
                  


           
           {/* <div class="card">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div> */}







           
                                <div className="four column grid"   >
                                <div className="ui link cards" >
                                  <div className="card" >
                                  
                                        <div className="image"><Link to={`${u.id}`}>
                                <img class="card-img-top" src={u.image} alt="Card image" style={{width:"40%"}} > 
                                 </img></Link>
                                <div className="cardBody" style={{backgroundColor:"black", width:"40%"}}>
                                  <h4 className="cardTitle">{ u.category}</h4>
                                     <p className="cardText">${u.price}</p>
                                     {/* <a href="/cart" style={{align :"center"}} class="btn btn-primary">Add to Cart</a> */}
                                     <Link  to={`/cart`}><input type="button" value="Add To Cart" class="btn btn-danger" onClick={this.handleCart}/></Link>
                                 {/* <a href="#" class="btn btn-primary">See Profile</a> */}
                                    </div>
                                    </div>    
                                    
                                    </div>
                                    </div>
                                    </div>  
                                   
                                   



                                    {/* <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={u.image} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}
    </div>

                               }
                            )}
            
            
        
                 </div>
        
        
              
      
        
        
        
              
        
                        
                   
                )
}
}
        