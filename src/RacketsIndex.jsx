import { RacketsShow } from './RacketsShow';

export function RacketsIndex(props) {
	return (
		<div>
			<h1>Rackets Index</h1>
			{props.rackets?.map((racket, index) => (
				<RacketsShow key={index} racket={racket}/>
			))}
		</div>
	)
}