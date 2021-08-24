
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class AddEmployee extends React.Component {
    
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            salary: 0,
            doj: new Date().toLocaleDateString()
        }
    
       // this.changeId = this.changeId.bind(this);
        //this.changeName = this.changeName.bind(this);
        //this.changeSalary = this.changeSalary.bind(this);
        //this.changeAddress = this.changeAddress.bind(this);

        this.addEmployee = this.addEmployee.bind(this);
        this.employeeFormRef=React.createRef();
    }

    changeId=(event)=> {
        this.setState({ id: event.target.value });
    }

    changeName=(event)=> {
        this.setState({ name: event.target.value });
    }

    changeSalary=(event)=> {
        this.setState({ salary: event.target.value });
    }

    changeDoj=(event)=>{
        this.setState({ doj: event.target.value });
    }

    addEmployee=(event) =>{
        event.preventDefault();
        let data = {
            "id": this.state.id,
            "name": this.state.name,
            "salary": this.state.salary,
            "doj": this.state.doj

        };

        axios.post('http://localhost:3001/employees', data)
            .then(response => {
                if (response.status === 201) {
                    console.log(this.employeeFormRef);
                    this.props.dispatch({
                        type: 'ADD_EMPLOYEE',
                        employee: response.data
                    }
                                    
                    
                    );

                
                }
            
            
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <form onSubmit={this.addEmployee}  ref={this.employeeFormRef}>
                <div className="form-group">
                    <label>Enter the ID:</label>
                    <input type='text' name='id' onChange={this.changeId} className='form-control' />
                </div>
                <div className="form-group">
                    <label>Enter the Name:</label>
                    <input type='text' name='name' onChange={this.changeName} className='form-control' />
                </div>
                <div className="form-group">
                    <label>Enter the Salary:</label>
                    <input type='text' name='salary' onChange={this.changeSalary} className='form-control' />
                </div>
                <div className="form-group">
                    <label>Enter the  Doj:</label>
                    <input type='text' name='doj' onChange={this.changeDoj} className='form-control' />
                </div>
                <div className="form-group text-center">
                    <button type='submit' className='btn btn-primary'>Add Employee</button>
                </div>
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        employees: state
    }
};

export default connect(mapStateToProps)(AddEmployee);