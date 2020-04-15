import React from 'react';
import {connect} from 'react-redux';
import {editSection} from '../../../../redux/actions/taskListActions';
import SectionEdit from './SectionEdit';

const SectionEditContainer = (props) => {
  return (
    <SectionEdit id={props.sectionId} editSection={props.editSection} defaultValue={props.defaultValue} confirmEdit={props.confirmEdit}/>
  )
}


export default connect(null, {editSection})(SectionEditContainer);