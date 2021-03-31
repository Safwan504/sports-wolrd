import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import malePhoto from '../../images/male.png';
import femalePhoto from '../../images/male.png';

import './LeagueDetails.css';

const LeagueDetails = () => {
    const { idLeague } = useParams();
    const [league, setLeague] = useState({});
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(response => response.json())
        .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    const {strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strBadge} = league;

    return (
        <div className="league-page">
    
            <div className="banner-image">
                <div className="banner-logo">
                     <img src={strBadge} alt=""/>
                </div>
            </div>

            <div className="container">
                <div className="row rounded shadow p-5 mt-5 mb-5 custom-card flex-column-reverse flex-sm-row">
                    <div className="col-md-6">
                        <h4>{strLeague}</h4>
                        <p>Founded: {intFormedYear}</p>
                        <p>Country: {strCountry}</p>
                        <p>Sport Type: {strSport}</p>
                        <p>Gender: {strGender}</p>
                    </div>
                    <div className="col-md-6">
                        <div className="image mb-3">
                        {
                            <img width='80%' src={strGender ==='male' ? malePhoto : femalePhoto} alt="" />
                        }
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
            <div className="custom-detail p-5 m-3 rounded">
                    <h4>Description...</h4><br/>
                    <p>{strDescriptionEN}</p>
                </div>
 
                <div className="p-3 text-center icons">
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPlayCircle} />YouTube</a>
                    <a href="https://www.espn.in/football/" target="_blank" rel="noreferrer"><span><FontAwesomeIcon icon={faGlobe} />Website</span></a>
                </div>
            </div>
        </div>



    );
};

export default LeagueDetails;