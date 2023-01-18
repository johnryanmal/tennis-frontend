import { Link } from 'react-router-dom'

import { RacketsIndexShow } from './RacketsIndexShow'

export function RacketsIndex(props) {
	return (
		<div>
			<h1>Rackets Index</h1>
			<Link to="/new">
				<button>Make Racket</button>
			</Link>
			{props.rackets?.map((racket, index) => (
				<RacketsIndexShow key={index} racket={racket} onSelect={props.onSelect}/>
			))}
		</div>
	)
}