import React from 'react';
import MessageList from './MessageList';

const Message = (props) => {
    return (
      <div>
        {props.email.map(message => {
          return ( 
            <div>
              <div class={"message " + (message.selected ? 'selected ' : '') + (message.read ? 'read' : 'unread')} id={message.id} onClick={props.selectEmail}>
                <div className="checkBox" onClick={props.starEmail}></div>
                <div class={"star " + (message.starred ? 'active' : '')} id={message.id} onClick={props.starEmail}></div>
                {message.labels.map(label => {
                  return <div className="label">{label}</div>
                })}
                <a>{message.subject}</a>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  
  export default Message