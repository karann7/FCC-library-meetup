// Karan Singh
import React, { Component } from 'react';
import Task from './Task.js';

class TaskList extends Component {
  render() {
    return (
      <div>
        {this.props.tasks.map((item, key) => {
          console.log(item);
          return (
            <Task key={key} task={item}/>
            
          )
        })}
      </div>
    );
  }
}

export default TaskList;
