import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Message from './Message';
import { Input } from 'antd';
const { TextArea } = Input;

const Messages = (props) => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState({
        user_from: props.currentUser,
        user_to: props.conversation.user_2,
        body: ''
    })

    useEffect(() => {
        axios
        .get(`https://mentor-be.herokuapp.com/api/conversation/${props.conversation.id}/messages`)
        .then(res => {
            setMessages(res.data)
        })
    }, [])

    const handleChanges = e => {
        setNewMessage({
            ...newMessage, [e.target.name]: e.target.value
        })
    }
    console.log(messages)
    return (
        <div>
            <div className='messageContainer'>
                {messages.map(item => {
                   return <Message message={item} key={item.id} currentUser={props.currentUser} />
                })}
            </div>
            <div>
                <TextArea placeholder='Send A Message' autoSize allowClear/>
            </div>
        </div>
    )
}

export default Messages;