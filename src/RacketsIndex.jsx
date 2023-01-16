import axios from 'axios';
import { useEffect, useState } from 'react';

export function RacketsIndex() {
	const [ rackets, setRackets ] = useState([1,2,3])	

	const getRackets = () => {
		axios.get('http://localhost:3000/rackets')
		.then((response) => {
			let data = response.data?.rackets
			console.log(data)
			if (data) {
				setRackets(data)
			}
		})
		.catch((error) => {
			console.error(error)
		})
	}

	useEffect(getRackets, [])

	const serializeRacket = (racket) => (
		<div>
			<h2>Racket</h2>
			<p>Created at: {racket.created_at}</p>
			<p>Updated at: {racket.updated_at}</p>
		</div>
	)

	return (
		<div>
			<h1>Rackets Index</h1>
			{rackets.map(serializeRacket)}
		</div>
	)
}