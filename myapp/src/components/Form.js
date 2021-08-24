import React, { Component } from 'react';
import CourseUncontrolledForm from './CourseUncontrolledForm';
import StudentControlledForm from './StudentControlledForm';
import withAuth from './WithAuth';


class Form extends Component {
    render() {
        return (
            <div className="container">
                
                 <hr/>
                <StudentControlledForm/>
               
                <hr/>
                <CourseUncontrolledForm/>
                <hr/>
               
           
                
            </div>
        );
    }
}

export default withAuth(Form);