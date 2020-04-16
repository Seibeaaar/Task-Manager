import React from 'react';
import {connect} from 'react-redux';
import {editTask} from '../../../../../redux/actions/taskListActions';
import TaskEdit from './TaskEdit';

const TaskEditContainer = (props) => {
  return <TaskEdit taskIndex={props.taskIndex} sectionId={props.sectionId} toggleEdit={props.toggleEdit} 
  editTask={props.editTask} defaultValue={props.defaultValue}/>
}

export default connect(null, {editTask})(TaskEditContainer);
