import axios from 'axios';
import React from 'react';
import { Component } from 'react';
import { u } from 'tar';


export default class product extends Component{

    constructor(props){
        super(props);
        this.state={product:{}};


    }
    componentDidMount(){
        let {productId}=this.props.match.params;
            if(productId){
                axios.get("https://fakestoreapi.com/Products/:productId"+productId)
                .then(response=>{
                    this.setState({product:response.data});
                })
            }
    
        }
    render(){
        let {url}= this.props.match;
        let {productId} = this.props.match.params;
        let {product} = this.state;

   if(productid){
    return(<div className="card">
            <h2>{product.category}</h2>

              
    </div>)
   }
}
    }