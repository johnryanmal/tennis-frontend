import axios from 'axios';
import { useEffect, useState } from 'react';

export function RacketsIndex() {
	const [ rackets, setRackets ] = useState([1,2,3])	

	useEffect(() => {
		axios.get('http://localhost:3000/rackets')
		.then((response) => {
			console.log(response)
		})
	})


	return (
		<div>
			<h1>Rackets Index</h1>
			{rackets.map((racket) => (
				<p>{racket}</p>
			))}
		</div>
	)
}