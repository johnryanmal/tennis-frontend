export function RacketsForm(props) {
	return (
		<div>
			<h1>Rackets New</h1>
			<form onSubmit={props.onSubmit}>
				<div>Description: <input type="text" name="description"/></div>
				<button type='submit'>{props.submit}</button>
			</form>
		</div>
	)
}