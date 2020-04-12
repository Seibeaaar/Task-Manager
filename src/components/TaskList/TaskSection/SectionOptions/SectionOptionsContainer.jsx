import React from 'react';
import {connect} from 'react-redux';
import {deleteSection} from '../../../../redux/actions/taskListActions';
import SectionOptions from './SectionOptions';

const SectionOptionsContainer = (props) => {
  return (
    <SectionOptions deleteSection={props.deleteSection} sectionId={props.sectionId}/>
  )
}

export default connect(null, {deleteSection})(SectionOptionsContainer);