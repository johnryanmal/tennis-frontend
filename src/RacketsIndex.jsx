import axios from 'axios';
import { useEffect, useState } from 'react';
import { RacketsShow } from './RacketsShow';

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

	return (
		<div>
			<h1>Rackets Index</h1>
			{rackets.map((racket, index) => (
				<RacketsShow key={index} racket={racket}/>
			))}
		</div>
	)
}