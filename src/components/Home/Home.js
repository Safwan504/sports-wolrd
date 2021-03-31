import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Leagues from '../Leagues/Leagues';
import './Home.css'

const Home = () => {
    const [allLeagues, setAllLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setAllLeagues(data.leagues))
    }, [])
    return (
        <div className="home">
            <div className="banner-image">
                <div className="banner-text">
                    <h1>Sports World</h1>
                    <Link to='/'><button className='btn btn-primary m-2'>Explore More</button></Link>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        allLeagues.map(league => <Leagues key={league.idLeague} league={league}></Leagues> ) 
                    }  
                </div>
            </div>

        </div>
    );
};

export default Home;