import axios from 'axios'

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
		<div>
			<h1>Rackets New</h1>
			<form onSubmit={handleSubmit}>
				<div>Description: <input type="text" name="description"/></div>
				<button type='submit'>Create Racket</button>
			</form>
		</div>
	)
}