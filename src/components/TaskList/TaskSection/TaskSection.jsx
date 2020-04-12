import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import SectionOptionsContainer from './SectionOptions/SectionOptionsContainer';
import './TaskSection.scss';

class TaskSection extends Component {
  state = {
    add: false,
    options: false,
    edit: false
  }
  setEditMode = (value) => {
    this.setState({edit: value})
  }
  render() {
    return (
      <div className="tasksection">
        <div className="tasksection__heading">
          <h5 className="tasksection__title">{this.props.heading}</h5>
          <button onClick={() => this.setState({options: !this.state.options})} className="options__btn">
            <FontAwesomeIcon icon={faEllipsisH} /> 
          </button>
          {this.state.options ? <SectionOptionsContainer sectionId={this.props.id} editMode={this.setEditMode}/> : ''}
        </div>
        <button className="add__btn add__btn--task">Add task</button>
      </div>
    )
  }
}

export default TaskSection;