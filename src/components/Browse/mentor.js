import React from 'react';
import './browseMentor.css';

const Mentor = (props) => {
    return(
        <div className='gridContainer1'>
            <img alt={props.mentor.first_name} src={props.mentor.image} />
            <div className='userInfo'> 
                {props.mentor.first_name} {props.mentor.last_name} <br/>
                {props.mentor.profession} <br/>
                {props.mentor.city}, {props.mentor.state}
            </div>
        </div>
    )
}
export default Mentor;