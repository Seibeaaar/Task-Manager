import React from 'react';
import {connect} from 'react-redux';
import {logOut} from '../../redux/actions/taskListActions';
import TaskList from './TaskList';

const TaskListContainer = (props) => {
  return (
    <TaskList logOut={props.logOut} sections={props.sections} firstName={props.firstName} lastName={props.lastName}/>
  )
}

const mapStateToProps = (state) => {
  return {
    sections: state.tasks.sections,
    firstName: state.tasks.currentFirstName,
    lastName: state.tasks.currentLastName
  }
}


export default connect(mapStateToProps, {logOut})(TaskListContainer);

