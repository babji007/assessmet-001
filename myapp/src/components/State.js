import React, { Component } from 'react'
import { MessageConsumer } from '../context/MessageContext';
import City from './City';


export default class State extends Component {
   

    constructor(props){
      super(props);

      this.state={

        name:'Maharashtra',
        country:'',
        city:'',
      }
    }

    getCity=(value)=>{
        console.log("State   :getCity :"+value);
        this.setState({
           city:value 
        })
    }



    handleInputChange=(event)=>{
        console.log("In handle Input Change :"+event.target.value);
        this.setState({[event.target.name]:event.target.value})
        this.props.getState(this.state.name);
    }
    
    render() {
            let {country,getCity,getState} =this.props;
           let {city}=this.state;
        return (
            <div className="jumbotron"   style={{'backgroundColor':'yellow'}}>
                <h3>
                  State Name :  <input defaultValue={this.state.name} onChange={this.handleInputChange}  name="name"/>
                  <br/><br/>
                  Country  Name : {country}
                  <br/><br/>
                  City Name   :   {city}  



                  <br/><br/>

                 
                </h3>
                <City    country={country}  state={this.state.name}  getCityInState={this.getCity} getCityInCountry={getCity}  />
          
                <font color="green">
                   
                   <MessageConsumer>
                       {value=>value}
                       
                  </MessageConsumer>
               </font>
          
          </div>

        )
    }
}
