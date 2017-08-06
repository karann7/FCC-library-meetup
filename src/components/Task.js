// Karan Singh
import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div>
      {this.props.task.taskName} <span><input type='checkbox'></input></span>
      </div>
    );
  }
}

export default Task;
