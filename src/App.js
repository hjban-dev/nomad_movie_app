import React from 'react';

function Food({name, picture}){
	return (
		<div>
			<h3>I like {name}!</h3>
			<img src={picture} width="200" />
		</div>
	)
}

const foodILike = [
	{
		name: "chiken",
		image:"http://www.bhc.co.kr/upload/bhc/menu/yang_view.JPG"
	},
	{
		name: "kimbap",
		image:"https://migrationology.com/wp-content/uploads/2012/04/korean-street-food1.jpg"
	},
	{
		name: "pizza",
		image:"https://media-cdn.tripadvisor.com/media/photo-s/15/c5/a4/14/pepperoni-lovers.jpg"
	},
]


function App() {
	return (
		<div>
			{foodILike.map(current => <Food name={current.name} picture={current.image} />)}
		</div>
	);
}

export default App;
