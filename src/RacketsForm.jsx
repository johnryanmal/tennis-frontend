import { Form } from 'react-router-dom';

export function RacketsForm(props) {
	const racket = props.racket

	return (
		<div>
			<form onSubmit={props.onSubmit}>
				<div>Description: <input type="text" name="description" defaultValue={racket?.description}/></div>
				<button type='submit'>{props.submit}</button>
			</form>
		</div>
	)
}