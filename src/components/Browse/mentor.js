import React from 'react';
import './browseMentor.css';

const Mentor = (props) => {
    return(
        <div className='gridContainer1'>
            <img alt={props.first_name} src={props.image} />
            <div className='userInfo'> 
                {props.firstname} {props.lastname} <br/>
                {props.profession} <br/>
                {props.city}, {props.state}
            </div>
        </div>
    )
}
export default Mentor;