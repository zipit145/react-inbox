import React from 'react';
import Message from './Message'

const MessageList = (props) => {
    return (
      <div>
        <Message email={props.email} starEmail={props.starEmail} selectEmail={props.selectEmail}/>
      </div>
    )
  }
  
  export default MessageList