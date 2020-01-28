import React from 'react';
import propTypes from 'prop-types';

function Movie({year, title, summary, poster, genres}){
	return (
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