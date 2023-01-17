export function RacketsForm(props) {
	return (
		<div>
			<form onSubmit={props.onSubmit}>
				<div>Description: <input type="text" name="description"/></div>
				<button type='submit'>{props.submit}</button>
			</form>
		</div>
	)
}