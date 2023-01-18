import axios from 'axios'
import { Link } from 'react-router-dom'

import { RacketsForm } from './RacketsForm'

export function RacketsNew(props) {
	const handleSubmit = (event) => {
		event.preventDefault()
		let params = new FormData(event.target)
		axios.post('http://localhost:3000/rackets', params)
		.then((response) => {
			event.target.reset()

			let racket = response.data?.racket
			props.onNew(racket)
		})
		.catch((error) => {
			console.error(error)
		})
	}

	return (
		<div>
			<h1>Rackets New</h1>
			<RacketsForm onSubmit={handleSubmit} submit='Create Racket'/>
			<Link to="/">
        <button>Back</button>
      </Link>
		</div>
	)
}