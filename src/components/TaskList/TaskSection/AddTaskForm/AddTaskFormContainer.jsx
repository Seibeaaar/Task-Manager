import React from 'react';
import {connect} from 'react-redux';
import {addTask} from '../../../../redux/actions/taskListActions';
import AddTaskForm from './AddTaskForm';

const AddTaskFormContainer = (props) => {
  return (
    <AddTaskForm addTask={props.addTask} toggleAddMode={props.toggleAddMode} sectionId={props.sectionId}/>
  )
}

export default connect(null, {addTask})(AddTaskFormContainer);