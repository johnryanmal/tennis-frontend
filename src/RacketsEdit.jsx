import axios from 'axios'
import { Link } from 'react-router-dom'

import { RacketsForm } from './RacketsForm'

export function RacketsEdit(props) {
	const racket = props.racket

	const handleSubmit = (event) => {
		event.preventDefault()
		let params = new FormData(event.target)
		axios.patch(`http://localhost:3000/rackets/${racket.id}`, params)
		.then((response) => {
			event.target.reset()

			let racket = response.data?.racket
			props.onUpdate(racket)
		})
		.catch((error) => {
			console.error(error)
		})
	}

	return (
		<div>
			<h1>Rackets Edit</h1>
			<RacketsForm racket={racket} onSubmit={handleSubmit} submit='Update'/>
			<hr/>
			<Link to="/show">
				<button>Back</button>
			</Link>
		</div>
	)
}