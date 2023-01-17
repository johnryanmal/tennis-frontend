import axios from 'axios'

export function RacketsNew() {
	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<div>
			<h1>Rackets New</h1>
			<form onSubmit={handleSubmit}>
				<button type='submit'>Create Racket</button>
			</form>
		</div>
	)
}