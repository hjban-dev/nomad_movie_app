import React from 'react';
import propTypes from 'prop-types'

const foodILike = [
	{
		id: 1,
		name: "chiken",
		image: "http://www.bhc.co.kr/upload/bhc/menu/yang_view.JPG",
		rating: 5
	},
	{
		id: 2,
		name: "kimbap",
		image: "https://migrationology.com/wp-content/uploads/2012/04/korean-street-food1.jpg",
		rating: 3.2
	},
	{
		id: 3,
		name: "pizza",
		image: "https://media-cdn.tripadvisor.com/media/photo-s/15/c5/a4/14/pepperoni-lovers.jpg",
		rating: 4.8
	},
]

function Food({name, picture, rating}){
	return (
		<div>
			<h3>I like {name}!</h3>
			<h4>{rating} / 5.0</h4>
			{/* <img src={picture} alt={picture} width="200" /> */}
		</div>
	)
}

Food.propTypes = {
	name: propTypes.string.isRequired,
	rating : propTypes.number.isRequired,
	picture : propTypes.string.isRequired,
};

function App() {
	return (
		<div>
			{foodILike.map(current => 
				<Food 
					key={current.id} 
					name={current.name} 
					picture={current.image} 
					rating={current.rating}
				/>
			)}
		</div>
	);
}

export default App;
