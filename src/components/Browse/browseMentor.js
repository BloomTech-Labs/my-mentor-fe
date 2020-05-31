import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Nav from '../../home-components/nav-drawer';
import Filter from './filter';
import "./browseMentor.css";
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

    const handleChange = event => {
        setQuery(event.target.value)
    };
    var x = localStorage.getItem('token')
    console.log(x, 'this is the token')
    return(
        <div>
            <Nav />
            <h3 className='header'>
              Find your Mentor  
            </h3>
            <div> <Filter mentor={mentor} query={query} handleChange={handleChange} /> </div>
        </div>
    )
}
export default BrowseMentor;