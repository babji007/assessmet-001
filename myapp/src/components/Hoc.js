import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default function Hoc() {
    return (
        <div class="container">
            <h3> High Order Component</h3>

            <HoverCounter/>
            <br/><br/>

            <ClickCounter/>
            
        </div>
    )
}
