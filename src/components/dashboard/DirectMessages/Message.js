import React from 'react';
import './DirectMessages.css';

const Message = (props) => {
    let verboseClassName = 'message';
    if(props.message.user_from === props.currentUser.first_name) {
        verboseClassName = verboseClassName + 'CurrentUser'
    }
    return(
        <div className={verboseClassName}>
            <p> {props.message.body} </p>
        </div>
    )
}

export default Message;