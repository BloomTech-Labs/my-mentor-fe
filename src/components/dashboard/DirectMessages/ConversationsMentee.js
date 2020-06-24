import React, {useEffect, useState} from 'react';
import ConversationListMentee from './ConversationListMentee';
import axios from 'axios';
import { AutoComplete } from 'antd';
import './DirectMessages.css';

const ConversationsMentee = (props) => { console.log(props.currentUser.first_name)
    const [convo, setConvo] = useState([]);
    const initialState = {
        user_1: '',
        user_2: props.currentUser.first_name
    };
    const [addConvo, setAddConvo] = useState(initialState);

    useEffect(() => {
        axios
        .get('https://mentor-be.herokuapp.com/api/conversation')
        .then(res => {
            console.log(res.data)
            const usersConvos = res.data.filter(user => {
                return(
                    props.currentUser.first_name === user.user_1 || props.currentUser.first_name === user.user_2
                )
            })
            setConvo(usersConvos)
        }) 
    }, [props.currentUser.first_name, addConvo]);
    
    //values for dropdown menu
    const options = props.mentor.map(user => {
        return(
            {value: `${user.first_name} ${user.last_name}`}
        )
    })
    const handleChanges = e => {
        console.log(addConvo)
        setAddConvo({
            ...addConvo, 'user_2': props.currentUser.first_name,'user_1': e
        })
        
    };
      const submit = e => {
        //Creates new message
        e.preventDefault();
        axios
        .post(`https://mentor-be.herokuapp.com/api/conversation`, addConvo)
        .then(res => {
            console.log(res.data)
            setAddConvo(initialState);
        })
        .catch(err => console.log(err));
    };
   
    return (
        <div>
            <form className='autoComplete' onSubmit={submit}>
                <AutoComplete
                    style={{
                    width: 200,
                    }}
                    options={options}
                    placeholder="Search for a Mentor"
                    filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                    onChange={handleChanges}
                    name='user_1'
                    value={addConvo.user_1}
                />
            </form>
            <div className='conversationContainer'>
                {convo.map(convo => {
                    return( 
                        <ConversationListMentee key={convo.id} conversation={convo} currentUser={props.currentUser} updateConvo={setConvo}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ConversationsMentee;