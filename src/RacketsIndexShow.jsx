
export function RacketsIndexShow(props) {
	const racket = props.racket

	return (
		<div>
			<h2>Racket</h2>
			<p>Created at: {racket.created_at}</p>
			<p>Updated at: {racket.updated_at}</p>
			{racket.description && (<p>Description:<br/>{racket.description}</p>)}
			<button onClick={() => props.onSelect(racket)}>Select</button>
		</div>
	)
}