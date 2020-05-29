import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './browseMentor.css';
import Nav from '../../home-components/nav-drawer';
import Mentor from './mentor';

function BrowseMentor() {
    const [mentor, setMentor] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
        .get('https://mentor-be.herokuapp.com/api/mentor',{headers: {Authorization: localStorage.getItem('token')}})
        .then(res => {
           
        const mentors = res.data.filter(char => (
            char.first_name.toLowerCase().includes(query.toLowerCase())
        ));
        console.log(res.data)
        setMentor(mentors);
        })
    }, [query]);
    var x = localStorage.getItem('token')
    console.log(x, 'this is the token')
    return(
        <div>
            <Nav />
            <h3 className='header'>
              Find your Mentor  
            </h3>
            <div className='gridContainer'>
                {mentor.length > 0 ? (
                    mentor.map(mentor => (
                    <Mentor
                        key={mentor.first_name}
                        firstname={mentor.first_name}
                        lastname={mentor.last_name}
                        city={mentor.city}
                        state={mentor.state}
                        image={mentor.image}
                        profession={mentor.profession}
                    />
                    ))
                ) : (
                    <div>
                        No Results
                    </div>
                )}
            </div>
        </div>
    )
}
export default BrowseMentor;