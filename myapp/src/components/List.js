import React, { Component } from 'react';
import Modal from './Modal.js';

class List extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: ["work","play"],
      textInput:'',
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState( {brochure : tempbrochure} );
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }
  handleSubmit =(event)=>{
    var taskLen= event.target.elements.msg.value;
    if(taskLen.length >0){
   this.setState({
   brochure:[...this.state.brochure,taskLen]
})
   event.target.reset();
    }
   event.preventDefault();
}
//   addTodo = todo => {
//     this.setState(prevState => ({
//       brochure: [...prevState.brochure, todo],
//     }));
//   };
  handleChange = event => {
    this.setState({ textInput: event.target.value });
  };


  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
        <tr key={index}>
          {/* <td>{}</td>
          <td>{" "} - {" "}</td> */}
          <td>{item}</td>
          <td>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
            <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>remove</button>
          </td>
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      
        <div>
        <div style={{ textAlign: "center" }}>
          <h1>Todo List with Modal Popup In React</h1>
          {/* <h6>Bootstrap 4.0.0-beta.3</h6> */}
        </div>
        <div>
        <form className="mb-3" onSubmit={event => this.handleSubmit(event)}>
    <div >
    <label>Enter the todo:</label><br/>
    <input class=" col-sm-3" type="text"  name="msg"  placeholder="Please enter your task" aria-label="Search"/>
    
    <button type="submit" className="btn btn-primary my-2 my-sm-0"> Add </button>
    
    </div>
    
</form>
</div>
        <table className="table table-striped">
          <tbody>
            {brochure}
          </tbody>
        </table>
        <Modal
        //   title={modalData.id}
          msg={modalData}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default List;