import React, { Component } from 'react';
import UpdatedComponent from './UpdatedComponent';

class HoverCounter extends Component {
/*

    constructor(props){
        super(props);
        this.state={count:0};
    }


   incrementCount=()=>{
       this.setState(prevState=>{return {count:prevState.count+1}})
   }

*/

    render() {

        let {count,incrementCount,name}=this.props;
        return (
            <div class="container"  style={{'color':'green'}}>
                   <h2>HOverCounter Component

                  <br/><br/>
                   Welcome {name}!!!
                   <br/><br/>
                  <div   onMouseOver={incrementCount}>   Mouse Overed  {count} times  </div>
                  </h2>            
            </div>
        );
    }
}

export default UpdatedComponent(HoverCounter);