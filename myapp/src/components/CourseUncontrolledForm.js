import React, { Component } from 'react';

class CourseUncontrolledForm extends Component {

constructor(props){
    super(props);
    this.courseId = React.createRef();
    this.courseName = React.createRef();
    this.coursePrice = React.createRef();
}


handleSubmit=(event)=>{
    let details=`
    Course Id      :${this.courseId.current.value}
    Course Name    :${this.courseName.current.value}
    Course Price   :${this.coursePrice.current.value}`;

   alert('A Course details was submitted:\n' + details);

   event.preventDefault();

 }

    render() {
        return (
            <div className="text-success">
            <h2>React UnControlled Component/Form Demo </h2>
 
             <form  onSubmit={this.handleSubmit}>
             <div className="form-group">
             <label>Course Id</label>     
             <input type="text"   defaultValue="123" ref={this.courseId}  class="form-control" id="courseId" placeholder="Enter Course Id" name="courseId"/>
             </div>
             
             <div className="form-group">
             <label>Course Name</label>     
             <input type="text"  defaultValue="React"  ref={this.courseName} class="form-control" id="courseName" placeholder="Enter Course Name" name="courseName"/>
             </div>
             
             <div className="form-group">
             <label>Course Price</label>     
             <input type="text" defaultValue="50000" ref={this.coursePrice}  class="form-control" id="coursePrice" placeholder="Enter Course Price" name="coursePrice"/>
             </div>
             <button type="submit" class="btn btn-primary">Submit</button>
             </form>

            </div>
        );
    }
}

export default CourseUncontrolledForm;