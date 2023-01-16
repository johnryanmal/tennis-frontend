
export function RacketsShow(props) {
	const racket = props.racket
	
	return (
		<div>
			<h2>Racket</h2>
			<p>Created at: {racket.created_at}</p>
			<p>Updated at: {racket.updated_at}</p>
		</div>
	)
}