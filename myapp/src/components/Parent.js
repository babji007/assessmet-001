import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {


constructor(props){
    super(props);
    this.state={message:'Hello Child',
                childMessage:''}
}

generateError(){
    throw new Error("Custom Error");
}

getChildMessage=(value)=>{
this.setState({childMessage:value})
}


handleInputChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
 }    





    render() {

           let{childMessage,demoss}=this.state;
           let a=100;
        
           {/*this.generateError()*/}
        
           return (
            <div>
                <font size="4" color="blue">  Parent Component 
                <br/>                 

                
            
             
             Parent Message <input onChange={this.handleInputChange} name="message"/>
   
             <br/><br/>
               
                Child Message  :{childMessage}
                
                </font>
                
           <hr/>
          
                
           <Child    parentMessage={this.state.message}   childChanged={this.getChildMessage}/>

               


            </div>
        );
    }
}

export default Parent;