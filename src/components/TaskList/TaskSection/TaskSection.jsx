import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

class TaskSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      add: false
    }
  }
  render() {
    return (
      <div>
        <div>
          <h5>{this.props.heading}</h5>
          <button>
            <FontAwesomeIcon icon={faEllipsisH} /> 
          </button>
        </div>
        <button>Add task</button>
      </div>
    )
  }
}

export default TaskSection;