import  React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, title, year, summaru, rating, poster}){
    
    return <h3> {title}</h3>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summaru: PropTypes.string.isRequired,
    rating : PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;