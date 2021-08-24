import React, { Component } from 'react';

class Child extends Component {
    
    

    
constructor(props){
    super(props);
    this.state={message:'Hello Parent'}
}

    




handleInputChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    this.props.childChanged(this.state.message);
 }    




    render() {

        let {parentMessage,childChanged}=this.props;
        let {message}=this.state;
        return (
            <div>
                 <div>
                <font size="4" color="magenta">  Child Component 
                Child Message  :<input  name="id"  onChange={this.handleInputChange} name="message"/> 
                <br/><br/>
                Parent Message  :{parentMessage}
              <br/><br/>
                <button onClick={()=>childChanged(message+" :"+Math.random()*10)}> Send Message to Parent </button>
               
                <br/><br/>
               
                </font>
              </div>
                
            </div>
        );
    }
}

export default Child;