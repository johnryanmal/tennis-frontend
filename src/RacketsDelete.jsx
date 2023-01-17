import axios from 'axios'

export function RacketsDelete(props) {
	const racket = props.racket

	const handleDelete = () => {
		axios.delete(`http://localhost:3000/rackets/${racket.id}`)
		.then(() => {
			props.onDelete(racket)
		})
		.catch((error) => {
			console.error(error)
		})
	}

	return (
		<button onClick={handleDelete}>Delete</button>
	)
}