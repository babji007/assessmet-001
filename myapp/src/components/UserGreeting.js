import React from 'react'

function UserGreeting(props) {

    let {user}=props;

    if(user!='Pradeep')
     throw new Error('Invalid User Name');

    return (
        <div>
           <font  size="4"  color="green">  Hello   {user} !!!</font>
        </div>
    )
}

export default UserGreeting
