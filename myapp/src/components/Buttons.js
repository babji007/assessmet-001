import React, { Component } from "react";
import Modal from "./Modal";

export default class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.saveDetails = this.saveDetails.bind(this);
  }

  deleteItem(index) {
    this.props.Bondel(index);
  }
  editItem(index) {
    this.props.Bonedit(index);
  }
  saveDetails(item) {
    this.props.BsaveDetails(item);
  }
  render() {
    const brochure = this.props.list.map((item, index) => {
      return (
        <div style={{ textAlign: "left" }}>
          <div class="list-group">
            <a
              class="list-group-item list-group-item-action active"
              aria-current="true"
            >
              <p class="mb-1">{item}</p>
              <div style={{ textAlign: "end" }}>
                <button
                  className="btn btn-success"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => this.editItem(index)}
                >
                  edit
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => this.deleteItem(index)}
                >
                  remove
                </button>
              </div>
            </a>
          </div>
        </div>
      );
    });

    const requiredItem = this.props.requiredItem;
    let modalData = this.props.list[requiredItem];
    return (
      <div>
        <div class="col-sm-3 container" style={{ textAlign: "center" }}>
          <div class="card">
            <div class="card-body">
              <p class="card-text">{brochure}</p>
            </div>
          </div>
        </div>

        <Modal msg={modalData} saveDetails={this.saveDetails} />
      </div>
    );
  }
}
