import React from 'react';
import './SectionOptions.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';

const SectionOptions = (props) => {
  return (
    <div className="popup__options">
      <button onClick={() => {
        props.editMode(true);
        props.hideOptions(false)
      }} className="option__btn"><FontAwesomeIcon icon={faPen} className="option__icon"/>Edit</button>
      <button onClick={() => props.deleteSection(props.sectionId)} className="option__btn"><FontAwesomeIcon icon={faTrash} className="option__icon"/>Delete</button>
    </div>
  )
}

export default SectionOptions;