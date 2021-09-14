import axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addEmployee } from '../actions/EmployeeActions';
// import { connect } from 'react-redux';
import EmployeeService from '../services/EmpServices';
 class EmpList extends Component {


    constructor(props) {
      
        super(props);

           console.log("=====EmploTable Component Created=======");
            this.state={
               title:'Employees List',
               users:[],
           }
        };
     
      
  //Initialization      
  componentDidMount(){
        
    
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        this.setState({users:response.data});
    })
         console.log("=====EmploTable Component mounted=======");
         } 
  
  
  componentWillUnmount(){
      console.log("=====EmployeeTable Component  willUnMount=======");  
  }
  
  
  componentDidUpdate(){
      console.log("=====EmployeeTable Component  didUpdate=======");    
  }

  addEmployee(){
    this.props.dispatch({ type: 'ADD_EMPLOYEE' });
   

}
deleteEmployee(){
this.props.dispatch({ type: 'DELETE_EMPLOYEE' });


}
  render() {
    
        return (
      
                <div class="container">
   <h2>{this.state.title}</h2>
  
   {/* <h2>{this.state.employees.id}</h2> */}

  <div class="list-group">
{    
    this.state.users.map(e=>{
         return    <li class="" ><Link to={`${e.id}`}> {e.name} </Link></li>
     })
  
}
{/* <link to='/newemployee'><button value='addEmployee'></button></link> */}
  </div>
</div>     
        )
    }
}

function mapStateToProps(state) {
    return {
        employees: state
    };
  }
  
  export default connect(mapStateToProps)(EmpList)