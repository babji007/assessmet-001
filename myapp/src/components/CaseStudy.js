import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import withAuth from './WithAuth';

 class CaseStudy extends Component {
  

    constructor(props){
        super(props);
        console.log("============CaseStudy created================");
   
    }


    componentDidMount(){

        console.log(this.props);
        
        console.log("=========CaseStudy  DidMount===========");
    }


    componentWillUnmount(){
        console.log("============CaseStudy  WillUnmount====== ");
    }


    render() {

        let {url}=this.props.match;

        console.log("============CaseStudyComponent  render ============="+url);
 
        return (
               <div>
                   <nav class="navbar">
  <div class="container-fluid">
    <ul class="nav navbar-nav">
    <li ><Link to={`${url}/users`}>Users</Link></li>
    <li ><Link to={`${url}/posts`}>Posts</Link></li>
    <li ><Link to={`${url}/todos`}>Todos</Link></li>
    <li ><Link to={`${url}/comments`}>Comments</Link></li>
    <li ><Link to={`${url}/albums`}>Albums</Link></li>
    <li ><Link to={`${url}/photos`}>Photos</Link></li>
    <br/><br/>
      

    </ul>
  </div>
</nav>
               </div>
          )
    }


}
export default CaseStudy;
