import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import './TaskSection.scss';

class TaskSection extends Component {
  state = {
    add: false
  }
  render() {
    return (
      <div className="tasksection">
        <div className="tasksection__heading">
          <h5 className="tasksection__title">{this.props.heading}</h5>
          <button className="options__btn">
            <FontAwesomeIcon icon={faEllipsisH} /> 
          </button>
        </div>
        <button className="add__btn add__btn--task">Add task</button>
      </div>
    )
  }
}

export default TaskSection;