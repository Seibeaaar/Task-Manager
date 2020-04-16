import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

class TaskEdit extends Component {
  state = {
    inputValue: this.props.defaultValue
  }
  inputHandler = e => {
    this.setState({
      inputValue: e.target.value
    })
  }  
  render() {
    return (
      <div>
        <textarea value={this.state.inputValue} onChange={this.inputHandler} className="task__input" placeholder="Enter your task here"></textarea>
        <div className="btn__container">
          <button className="confirm__btn" onClick={() => {
            this.props.editTask(this.props.sectionId, this.props.taskIndex, this.state.inputValue);
            this.props.toggleEdit(false);
          }}>
            Add task
          </button>
          <button onClick={() => this.props.toggleEdit(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    )
  }
}

export default TaskEdit;