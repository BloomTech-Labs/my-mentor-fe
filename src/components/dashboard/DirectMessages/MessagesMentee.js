import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Message from './Message';
import { Input, Button } from 'antd';
const { TextArea } = Input;

const MessagesMentee = (props) => {
    const [messages, setMessages] = useState([]);
    const initialState = {
        id: Date.now(),
        user_from: props.currentUser.first_name,
        user_to: props.conversation.user_1,
        body: ''
    };
     const [newMessages, setNewMessage] = useState(initialState);
    useEffect(() => {
        axios
        .get(`https://mentor-be.herokuapp.com/api/conversation/${props.conversation.id}/messages`)
        .then(res => {
            setMessages(res.data)
        })
    }, [newMessages]);

    const handleChanges = e => {
        setNewMessage({
            ...newMessages, [e.target.name]: e.target.value
        })
    };
      const submit = e => {
        //Creates new message
        e.preventDefault();
        axios
        .post(`https://mentor-be.herokuapp.com/api/conversation/${props.conversation.id}/messages`, newMessages)
        .then(res => {
            setNewMessage(initialState);
        })
        .catch(err => console.log(err));
    };
  
    return (
        <div>
            <div className='messageContainer'>
                {messages.map(item => {
                   return <Message message={item} key={item.id} currentUser={props.currentUser} />
                })}
            </div>
            <form >
                <TextArea autoSize allowClear
                    name='body'
                    placeholder='Send A Message' 
                    onChange={handleChanges} 
                    value={newMessages.body} 
                    onPressEnter={submit}
                />
                <Button type='primary' onClick={submit} >
                    Send
                </Button>
            </form>
        </div>
    )
}

export default MessagesMentee;