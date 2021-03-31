import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Leagues = (props) => {
    const league = props.league;
    const {strLeague, strSport, idLeague} = league;
    return (
        <div className="col-md-4 p-4">
            <div className="shadow-lg p-5 mb-5 bg-black rounded h-100">
                <h3>{strLeague}</h3>
                <p>Sports Type: {strSport}</p>
                <Link to={`/details/${idLeague}`}><button className='btn btn-primary'>Explore  <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            </div>


        </div>
    );
};

export default Leagues;