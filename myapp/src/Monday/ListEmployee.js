import React from 'react';
import EmployeeRow from '../Monday/EmployeeRow';
import axios from 'axios';
import { connect } from 'react-redux';

class ListEmployee extends React.Component {



    componentDidMount() {

        console.log("============List Employee Mounted===========");

        axios.get('http://localhost:3003/employees')
            .then(response => {
                this.props.dispatch({
                    type: 'FETCH_EMPLOYEE',
                    employees: response.data
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        console.log(this.props);
        return (
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>SALARY</th>
                        <th>DOJ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.employees.employeeReducer.map(
                            (employee, index) =>
                                <EmployeeRow employee={employee} key={index} />
                        )
                    }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state
    }
};

export default connect(mapStateToProps)(ListEmployee);