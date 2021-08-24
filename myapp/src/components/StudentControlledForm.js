import React, { Component } from 'react';

class StudentControlledForm extends Component {
  
  constructor(props){
  super(props);
  
  this.state={
               id:101,
               name:'Pradeep Chinchole',
               marks:56.77 
             };


  }  
  
  
  handleSubmit=(event)=>{
      let {id,name,marks}=this.state;

    let data=` Student Id    :${id}
               Student Name  :${name}
               Student Marks :${marks}
              `

      alert(" Successfull    "+data);
      event.preventDefault();

  }
  
handleInputChange=(event)=>{
      this.setState({[event.target.name]:event.target.value})
   }    


/*
    handleStudentIdChange=(event)=>{
        console.log(event.target.name+ "   "+event.target.value);

        this.setState({id:event.target.value})

    }

    handleStudentNameChange=(event)=>{
        console.log(event.target.name+ "   "+event.target.value);
        this.setState({name:event.target.value})   
    }

    handleStudentMarksChange=(event)=>{
        console.log(event.target.name+ "   "+event.target.value);
        this.setState({marks:event.target.value})
    }
*/
  
  
  
    render() {
        return (
            <div className="text-info">
              <h2> React Controlled Component/Form Demo  </h2>
             <form  onSubmit={this.handleSubmit}>
             <div className="form-group">
             <label>Student Id</label>     
             <input type="text"  defaultValue="101"     onChange={this.handleInputChange}    class="form-control" id="id" placeholder="Enter Student Id" name="id"/>
             </div>
             
             <div className="form-group">
             <label>Student Name</label>     
             <input type="text"  defaultValue="Sachin"   onChange={this.handleInputChange}  class="form-control" id="name" placeholder="Enter Student Name" name="name"/>
             </div>
             
             <div className="form-group">
             <label>Student Marks</label>     
             <input type="text"   defaultValue="78.99" onChange={this.handleInputChange}  class="form-control" id="address" placeholder="Enter Student Address" name="marks"/>
             </div>
             <button type="submit" class="btn btn-primary">Submit</button>
             </form> 

           </div>
        );
    }
}

export default StudentControlledForm;