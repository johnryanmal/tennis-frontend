import axios from 'axios'

import { RacketsForm } from './RacketsForm'

export function RacketsNew(props) {
	const handleSubmit = (event) => {
		event.preventDefault()
		let params = new FormData(event.target)
		event.target.reset()
		axios.post('http://localhost:3000/rackets', params)
		.then((response) => {
			let racket = response.data?.racket
			props.onNew(racket)
		})
		.catch((error) => {
			console.error(error)
		})
	}

	return (
		<RacketsForm onSubmit={handleSubmit} submit='Create Racket'/>
	)
}