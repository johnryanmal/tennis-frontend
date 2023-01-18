import axios from 'axios'

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
		<RacketsForm onSubmit={handleSubmit} submit='Update'/>
	)
}