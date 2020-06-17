import React, {useEffect, useState} from 'react';
import ConversationList from './ConversationList';
import { AxiosWithAuth } from '../../../middleware/axioswithauth';
import axios from 'axios';
import { AutoComplete } from 'antd';

const Conversations = (props) => {
    const [mentors, setMentors] = useState([]);
    const [mentees, setMentees] = useState([]);
    const [convo, setConvo] = useState([]);
    useEffect(() => {
        AxiosWithAuth()
        .get('https://mentor-be.herokuapp.com/api/mentor')
        .then( res => {
            setMentors(res.data)
        })
    }, [])
    useEffect(() => {
        AxiosWithAuth()
        .get('https://mentor-be.herokuapp.com/api/mentee')
        .then(res => {
            setMentees(res.data)
        })
    }, [])
    useEffect(() => {
        axios
        .get('https://mentor-be.herokuapp.com/api/conversation')
        .then(res => {
            const usersConvos = res.data.filter(user => {
                return(
                    props.currentUser.first_name === user.user_1 || props.currentUser.first_name === user.user_2
                )
            })
            setConvo(usersConvos)
        })
    }, [props.currentUser.first_name]);

    // const combineUsers = mentors.concat(mentees); // array of all users
    
    //values for dropdown menu
    const options = mentees.map(user => {
        return(
            {value: `${user.first_name} ${user.last_name}`}
        )
    })

    // //grabs the 2nd user in the conversation to be displayed
    // const convoWith = mentees.filter(user => {
    //     return (
    //         user.first_name === convo.user_2
    //     )
    // })
    
    // console.log(convoWith)
    return (
        <div>
            <div>
                <AutoComplete
                    style={{
                    width: 200,
                    }}
                    options={options}
                    placeholder="Search for a User"
                    filterOption={(inputValue, option) =>
                    option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                /> 
            </div>
            {convo.map(convo => {
                return( 
                    <ConversationList key={convo.id} conversation={convo} currentUser={props.currentUser} />
                )
            })}
        </div>
    )
}

export default Conversations;