import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import SectionOptionsContainer from './SectionOptions/SectionOptionsContainer';
import SectionEditContainer from './SectionEdit/SectionEditContainer';
import './TaskSection.scss';
import AddTaskFormContainer from './AddTaskForm/AddTaskFormContainer';
import TaskItemContainer from './TaskItem/TaskItemContainer';

class TaskSection extends Component {
  state = {
    add: false,
    options: false,
    edit: false
  }
  toggleEditMode = (value) => {
    this.setState({edit: value})
  }
  toggleOptions = (value) => {
    this.setState({options: value})
  }
  toggleAddMode = (value) => {
    this.setState({
      add: value
    })
  }
  render() {
    return (
      <div className="tasksection">
        <div className="tasksection__heading">
          {this.state.edit ? <SectionEditContainer confirmEdit={this.toggleEditMode} sectionId={this.props.id} defaultValue={this.props.heading}/> : 
            <>
              <h5 className="tasksection__title">{this.props.heading}</h5>
              <button onClick={() => this.setState({options: !this.state.options})} className="options__btn">
                <FontAwesomeIcon icon={faEllipsisH} /> 
              </button>
            </>
          }
          {this.state.options ? <SectionOptionsContainer sectionId={this.props.id} editMode={this.toggleEditMode} hideOptions={this.toggleOptions}/> : ''}
        </div>
        <div className="task__container">
          {this.props.tasks.map((item, index) => <TaskItemContainer title={item} index={index} sectionId={this.props.id}/>)}
        </div>
        {this.state.add ? <AddTaskFormContainer toggleAddMode={this.toggleAddMode} sectionId={this.props.id}/> : <button className="add__btn add__btn--task" onClick={() => this.toggleAddMode(true)}>Add task</button>}
      </div>
    )
  }
}

export default TaskSection;