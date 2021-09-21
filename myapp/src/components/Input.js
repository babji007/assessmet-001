import React, { Component } from "react";

export default class Input extends React.Component {
  handleSubmit(event) {
    this.props.onSubmit(event);
  }
  render() {
    return (
      <div>
        <form class="example" onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" name="msg" placeholder="Please enter your task" />
          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}
