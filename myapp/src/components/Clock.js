import React, { Component } from 'react';

class Clock extends Component {

    constructor(props){
        super(props);
        this.state={time:new Date().toLocaleString()}
        console.log("===========Clock component created==========");
    }

   componentDidMount(){
    console.log("===========Clock component mounted==========");
    this.timer=setInterval(()=>{
        this.setState({time:new Date().toLocaleString()});
       },1000);
   } 

    componentWillUnmount(){
    console.log("===========Clock component unmounted==========");
       clearInterval(this.timer);
    }
    
    render() {
       let {time}=this.state;
       console.log("===========Clock component rendered==========");
   
        return (
            
               <div className="container">
                <font color="blue" size="5">  
                Today is : {time}
                </font>
            </div>
        );
    }
}

export default Clock;