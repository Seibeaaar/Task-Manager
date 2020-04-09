import React from 'react';
import {connect} from 'react-redux';
import {logOut} from '../../redux/actions/taskListActions';
import TaskList from './TaskList';

const TaskListContainer = (props) => {
  return (
    <TaskList logOut={props.logOut} sections={props.sections} />
  )
}

const mapStateToProps = (state) => {
  return {
    sections: state.login.sections
  }
}


export default connect(mapStateToProps, {logOut})(TaskListContainer);

