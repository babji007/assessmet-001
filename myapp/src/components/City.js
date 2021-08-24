import React, { Component } from 'react'
import { MessageConsumer } from '../context/MessageContext';

export default class City extends Component {
   

    constructor(props){
      super(props);

      this.state={

        name:'Pune',
        country:'',
        state:'',
      }
    }


    handleCityChange(value){
        this.setState({
            country:value
        })
    }

    
    handleInputChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        
        this.props.getCityInCountry(this.state.name);
        this.props.getCityInState(this.state.name);
        
    }
    
    render() {


        let {state,country}=this.props;
        return (
            <div className="jumbotron"   style={{'backgroundColor':'orange'}}>
                <h3>
                  City Name :  <input defaultValue={this.state.name}  onChange={this.handleInputChange}  name="name"/>
                  <br/><br/>
                  Country  Name : {country}  
                  <br/><br/>
                  State Name    : {state}   
                  <br/><br/>
                

                  <font color="blue">
                   
                     <MessageConsumer>
                         {value=>value}
                         
                    </MessageConsumer>
                 </font>



                </h3>
          </div>
        )
    }
}
