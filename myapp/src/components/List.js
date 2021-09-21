import React, { Component } from "react";
import { Redirect } from "react-router";
import Buttons from "./Buttons.js";
import Input from "./Input.js";
// import Modal from "./Modal.js";
import "./Input.css";

class List extends Component {
  constructor(props) {
    super(props);

    this.editItem = this.editItem.bind(this);
    this.saveDetails = this.saveDetails.bind(this);
    this.state = {
      requiredItem: 0,
      list: [
        "work",
        "play",
        `All changes are saved locally, automatically. 
         Drag this item onto another list (on the right) to transfer it.`,
      ],
    };
  }

  editItem(index) {
    this.setState({
      requiredItem: index,
    });
  }

  saveDetails(item) {
    const requiredItem = this.state.requiredItem;
    let templist = this.state.list;
    templist[requiredItem] = item;
    this.setState({ list: templist });
  }

  deleteItem(index) {
    let templist = this.state.list;
    templist.splice(index, 1);
    this.setState({ list: templist });
  }
  handleSubmit = (event) => {
    var taskLen = event.target.elements.msg.value;
    if (taskLen.length > 0) {
      this.setState({
        list: [...this.state.list, taskLen],
      });
      event.target.reset();
    }
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <div style={{ marginLeft: 400 }}>
          <div>
            <h1>Todo List with Modal Popup In React</h1>
          </div>
          <div>
            <Input onSubmit={(event) => this.handleSubmit(event)} />
          </div>
          <br />
          <div>
            <Buttons
              list={this.state.list}
              Bonedit={(event) => this.editItem(event)}
              Bondel={(event) => this.deleteItem(event)}
              requiredItem={this.state.requiredItem}
              BsaveDetails={(event) => this.saveDetails(event)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default List;
