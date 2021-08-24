import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class EmployeeRow extends React.Component {

    constructor() {
        super();
        this.deleteEmployeeById = this.deleteEmployeeById.bind(this);
    }

    deleteEmployeeById() {
        axios.delete(
            'http://localhost:3001/employees/' + this.props.employee.id)
            .then(response => {
                if (response.status === 200) {
                    this.props.dispatch({
                        type: 'DELETE_EMPLOYEE',
                        id: this.props.employee.id
                    });
                }
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <tr>
                <td>{this.props.employee.id}</td>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.salary}</td>
                <td>{this.props.employee.doj}</td>
                <td>
                    <button type="button" className="btn btn-danger"
                        onClick={this.deleteEmployeeById}>
                        DELETE
                    </button>
                </td>
            </tr>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        employees: state
    }
};

export default connect(mapStateToProps)(EmployeeRow);