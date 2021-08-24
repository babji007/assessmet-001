import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import Login from './Login'
export default class Header extends Component {


  

    render() {
        return (
     <div>
            <nav class="navbar navbar-inverse">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">React @ Mphasis</a>
                
              </div>
              <ul class="nav navbar-nav">
              <li ><Link to={'/adminlist'}>Admin List</Link></li>
              {/* <li class="active"><Link to={'/home'}>Home</Link></li>
              <li ><Link to={'/counter'}>Counter</Link></li>
              <li ><Link to={'/clock'}>Clock</Link></li>
              <li ><Link to={'/catlog'}>Catlog</Link></li>
              <li ><Link to={'/greeting'}>Greeting</Link></li>
              <li ><Link to={'/employee'}>Employee</Link></li>
              <li ><Link to={'/student'}>Student</Link></li>
              <li ><Link to={'/form'}>React Forms</Link></li>*/}
              {/* <li ><Link to={'/home1'}>Home1</Link></li>  */}
              <li ><Link to={'/employees'}>Employee Crud</Link></li>
              <li ><Link to={'/hoc'}>HOC</Link></li>
              <li ><Link to={'/casestudy'}>CaseStudy</Link></li>
              {/* <li ><Link to={'/hooks'}>Hooks</Link></li> */}
              {/* <li ><Link to={'/word'}>Word</Link></li> */}
              <li ><Link to={'/lazy'}>My Component</Link></li>
              <li ><Link to={'/fakeshop'}>Redux-App</Link></li>
              <li ><Link to={'/emplist'}>All Employee</Link></li>
              
                                                     
              </ul>
             

            
              <ul class="nav navbar-nav navbar-right">
                <li  ><Link to={'/fakeshop/cart'}><span class="glyphicon glyphicon-shopping-cart"></span>cart</Link></li>
           <li><Link to={'/signup'}><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
           <li><Link to={'/login'}><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
          </ul>
          </div>
          </nav>
              
          </div>
        )
    }
}
