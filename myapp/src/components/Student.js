import React from 'react'
import StudentControlledForm from './StudentControlledForm';

export default function Student(props) {
        
    let {id,name,marks,children}=props;
    
    console.log("Student :",props.children);

    return (
        <div  className="container" style={{color:'green'}}>
             

            <h2>  Student Details  </h2>
            <h3>  Student Id      :{id}</h3>
            <h3>  Student Name    :{name}</h3>
            <h3>  Student Marks   :{marks}</h3>
            <h3>  Student Content :{children}</h3>
          
        </div>


    )
}
