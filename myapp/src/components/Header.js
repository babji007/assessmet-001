import React, { Component } from 'react'

import { Link } from 'react-router-dom'

export default class Header extends Component {

    render() {
        return (
     
            <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">React @ Mphasis</a>
                
              </div>
              <ul class="nav navbar-nav">
              <li class="active"><Link to={'/home'}>Home</Link></li>
              <li ><Link to={'/counter'}>Counter</Link></li>
              <li ><Link to={'/clock'}>Clock</Link></li>
              <li ><Link to={'/catlog'}>Catlog</Link></li>
              <li ><Link to={'/greeting'}>Greeting</Link></li>
              <li ><Link to={'/employee'}>Employee</Link></li>
              <li ><Link to={'/student'}>Student</Link></li>
              <li ><Link to={'/form'}>React Forms</Link></li>
              <li ><Link to={'/state-lift'}>State Lift</Link></li>
              <li ><Link to={'/employees'}>React Ajax</Link></li>
              <li ><Link to={'/hoc'}>HOC</Link></li>
              <li ><Link to={'/casestudy'}>CaseStudy</Link></li>
              <li ><Link to={'/hooks'}>Hooks</Link></li>
              <li ><Link to={'/word'}>Word</Link></li>
              <li ><Link to={'/lazy'}>My Component</Link></li>
              <li ><Link to={'/list-employee'}>Redux-App</Link></li>
              <li ><Link to={'/add-employee'}>Add Employee</Link></li>
              
                                                     

             


               
              </ul>

              <ul class="nav navbar-nav navbar-right">
           <li><Link to={'/register'}><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
           <li><Link to={'/login'}><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
          </ul>
            </div>
          </nav>
              

        )
    }
}
