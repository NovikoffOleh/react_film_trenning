import  React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, title, year, summary, rating, genres,poster}){
    return <div className="movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__collum">
        <h3 className="movie__title">{title}</h3>
        <ul className='geners'>
            {genres.map((genere, index)=>{
            return <li key={index} className='geners__genere'>{genere}</li>
            })
            }
        </ul>
        <h5 className="movie__year">{year}</h5>
        <h5 className="movie__rating">{rating}</h5>
        <p className="movie__summary">{summary}</p>
        
        </div>
    </div> ;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;