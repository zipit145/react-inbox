import React from 'react';

const Toolbar = (props) => {
    return (
      <div class="toolbar">
        <button onClick={props.newEmail}>New Message</button>
        <button onClick={props.selectAll}>Select all</button>
        <button onClick={props.markAsRead}>Mark As Read</button>
        <button onClick={props.markAsUnread}>Mark As unread</button>
        <button onClick={props.applyLabel}>Apply Label</button>
        <button onClick={props.removeLabel}>remove label</button>
        <button onClick={props.delete}>delete</button>
      </div>
    )
  }
  
  export default Toolbar