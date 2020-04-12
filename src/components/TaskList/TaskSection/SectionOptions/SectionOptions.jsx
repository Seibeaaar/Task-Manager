import React from 'react';

const SectionOptions = (props) => {
  return (
    <div className="popup__options">
      <button onClick={() => props.editMode(true)}>Edit</button>
      <button onClick={() => props.deleteSection(props.sectionId)}>Delete</button>
    </div>
  )
}

export default SectionOptions;