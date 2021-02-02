import React from 'react';

function TaskType(props) {
  let {item, index, children, onDragOver, onDragEnter, onDragLeave, onDrop } = props;
  return (
    <li className="list__cell js-cell" key={index} id={item}
      onDragOver={(event) => onDragOver(event)}
      onDragEnter={(event) => onDragEnter(event)}
      onDragLeave={(event) => onDragLeave(event)}
      onDrop={(event) => { onDrop(event, `${item}`) }}
      data-title={item}
    >
      {children}
    </li>
  )
}

export default TaskType