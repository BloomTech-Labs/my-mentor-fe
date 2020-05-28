import React, {useState, useEffect} from 'react';
import AxioWithAuth from '../../middleware/axioswithauth';
import Nav from '../../home-components/nav-drawer';

function BrowseMentor() {
    const [mentor, setMentor] = useState([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AxiosWithAuth()
        .get('/mentor')
        .then(res => {
        const mentors = res.data.filter(char => {
            char.first_name.toLowerCase().includes(query.toLowerCase())
        });
        console.log(res.data)
        setMentor(mentors);
        })
    }, [query]);
    return(
        <div>
            <Nav />
            <h4>
              Find your Mentor  
            </h4>
        </div>
    )
}
export default BrowseMentor;