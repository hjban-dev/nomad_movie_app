import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import './Movie.scss'

function Movie({year, title, summary, poster, genres}){
	return (
		<Link to = {{
			pathname : "/movie-detail",
			state:{
				year,
				title,
				summary,
				poster,
				genres,
			}
		}}>
			<div className="movie">
				<img src={poster} alt={poster} title={title} />
				<div className="movie__data">
					<h3 className="movie__title">{title}</h3>
					<h4 className="movie__year">{year}</h4>
					<ul className="movie__genres">
						{genres.map((genre, idx) => 
							<li key={idx} className="genre">{ genre }</li>
						)}
					</ul>
					<p className="movie__summary">{summary.slice(0, 180)}...</p>
				</div>
			</div>
		</Link>
	)
}

Movie.propTypes = {
	year : propTypes.number.isRequired,
	title : propTypes.string.isRequired,
	summary : propTypes.string.isRequired,
	poster : propTypes.string.isRequired,
	genres : propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;