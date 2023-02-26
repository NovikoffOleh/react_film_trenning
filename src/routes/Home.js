import  React from 'react';
/*import PropTypes from 'prop-types';*/
import axios from 'axios';
import Movie from 'components/Movie/Movie';
import './Home.css';

class Home extends React.Component{

    state = {
        isLoading : true,
        movies:[]
    };
getMovies = async ()=>{
    const {data:{data:{movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    this.setState({movies, isLoading : false});
}

componentDidMount () {
setTimeout (()=> {this.setState({isLoading: false})}, 2000);
this.getMovies();
    }

render () {
    const {isLoading, movies} = this.state;
return (
<section className="container">
    {isLoading ? (
    <div className="loader">
      <span className="loader_text">Загрузка</span>
      </div> 
    ): (
    <div  className="movies">
    {movies.map((movie) => (
<Movie 
    key={movie.id}
    id= {movie.id}
    title= {movie.title}
    year= {movie.year}
    summary= {movie.summary}
    rating= {movie.rating}
    genres={movie.genres}
    poster= {movie.medium_cover_image}
    />
    ))}
</div>
)};
</section>
);
}

}

export default Home;