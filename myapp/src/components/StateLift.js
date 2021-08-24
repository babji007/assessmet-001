import React, { Component } from 'react';
import { MessageProvider } from '../context/MessageContext';
import Country from './Country';
import Greeting from './Greeting';

import ErrorBoundary from './ErrorBoundry';

import Parent from './Parent';

class StateLift extends Component {
    
    
    
    render() {

        let {parentMessage}=this.props;

        return (
            <div class="container">

                
                
             

                <MessageProvider value="Hi All,Hope You are enjoying the Training!!!">  
                <Country/>
                </MessageProvider>
                     <hr/>
                 <div>
                <font size="6" color="orange"> State Lift Demo </font>
                 <Parent/>
                </div>
               
              


            </div>
        );
    }
}

export default StateLift;