import React from 'react'
import ErrorBoundary from './ErrorBoundry'
import UserGreeting from './UserGreeting'
import withAuth from './WithAuth'

function Home() {
    return (
        <div className="container">
            Welcome To Home


<ErrorBoundary>

<UserGreeting  user="Pradeep"/>
<UserGreeting  user="Pradeep"/>
<UserGreeting  user="Pradeep"/>
<UserGreeting  name="Pradeep"/>

</ErrorBoundary>


        </div>
    )
}

export default withAuth(Home);