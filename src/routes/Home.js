import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.scss'

class Home extends React.Component{
	state = {
		isLoading: true,
		movies: [],
	}

	render(){
		const { isLoading, movies } = this.state;
		return(
			<section className="container">
				{isLoading 
					? (
						<div className="loader">
							<p className="loader__text">Loading... </p>
							<p className="loader__text">Wait a minute please...</p>	
						</div> 
					)
					: (
						<div className="movies">
							{ movies.map( movie => {
								return (
									<Movie 
										key = {movie.id} 
										id = {movie.id} 
										year = {movie.year} 
										title = {movie.title} 
										summary = {movie.summary} 
										poster = {movie.medium_cover_image} 
										genres = {movie.genres} 
									/>
								)
							})}
						</div>
					)
				}
			</section>
		);
	}
	
	getMovies = async() => {
		const { data : { data : { movies } } } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
		this.setState({ movies, isLoading: false});
	}

	componentDidMount(){
		this.getMovies();
	}
}

export default Home;
