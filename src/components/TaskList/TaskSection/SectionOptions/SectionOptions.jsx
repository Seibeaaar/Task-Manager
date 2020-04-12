import React from 'react';

const SectionOptions = (props) => {
  return (
    <div>
      <button>Edit</button>
      <button onClick={() => props.deleteSection(props.sectionId)}>Delete</button>
    </div>
  )
}

export default SectionOptions;