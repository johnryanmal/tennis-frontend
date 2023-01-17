import { RacketsIndexShow } from './RacketsIndexShow';

export function RacketsIndex(props) {
	return (
		<div>
			<h1>Rackets Index</h1>
			{props.rackets?.map((racket, index) => (
				<RacketsIndexShow key={index} racket={racket} onSelect={props.onSelect}/>
			))}
		</div>
	)
}