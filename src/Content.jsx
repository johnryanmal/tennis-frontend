import { RacketsIndex }from './RacketsIndex'
import { RacketsNew } from './RacketsNew'
import axios from 'axios'
import { useState, useEffect  } from 'react'

export function Content() {
  const [rackets, setRackets] = useState([])

  const getRackets = () => {
		axios.get('http://localhost:3000/rackets')
		.then((response) => {
			let data = response.data?.rackets
			console.log(data)
			if (data) {
				setRackets(data)
			}
		})
		.catch((error) => {
			console.error(error)
		})
	}

	useEffect(getRackets, [])

  const onRacket = (racket) => {
    console.log(racket)
    setRackets([...rackets, racket])
  }

  return (
    <div>
      <RacketsNew onSubmit={onRacket} />
      <RacketsIndex rackets={rackets}/>
    </div>
  );
}
