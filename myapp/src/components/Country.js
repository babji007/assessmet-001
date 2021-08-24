import React, { Component } from 'react'
import { MessageConsumer } from '../context/MessageContext';
import State from './State';

export default class Country extends Component {
   

    constructor(props){
      super(props);

      this.state={

        name:'India',
        stateName:'',
        cityName:'',
      }
    }


    getCity=(value)=>{

        console.log("=========get City in country  :"+value);
        this.setState({
            cityName:value
        })
    }

    getState=(value)=>{
        console.log("=============country getstate"+value);
        this.setState({
            stateName:value
        })
    }

    handleInputChange=(event)=>{
        this.setState({name:event.target.value})
    }
   
    
    render() {
        let value = this.context;
   
        return (
            <div className="container"   style={{'backgroundColor':'cyan'}}>

               
                <h3>
                  Country Name :  <input defaultValue={this.state.name} onChange={this.handleInputChange}  name="name"/>
                  <br/><br/>
                  State  Name :  {this.state.stateName}
                  <br/><br/>
                  City Name   :  {this.state.cityName}  
                  <br/><br/>
                 
                </h3>
                <State  country={this.state.name}   getState={this.getState}  getCity={this.getCity}/>
                <hr/>
                <font color="red">
                   
                     <MessageConsumer>
                         {value=>value}
                         
                    </MessageConsumer>
                 </font>
          </div>
        )
    }
}
