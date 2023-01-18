import axios from 'axios'
import { useState, useEffect  } from 'react'

import { RacketsIndex }from './RacketsIndex'
import { RacketsNew } from './RacketsNew'
import { RacketsShow } from './RacketsShow'

export function Content() {
  const [rackets, setRackets] = useState([])
  const [racket, setRacket] = useState()

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

  const addRacket = (racket) => {
    console.log('add', racket)
    setRackets([...rackets, racket])
  }

  const selectRacket = (racket) => {
    console.log('select', racket)
    setRacket(racket)
  }

  const removeRacket = (racket) => {
    console.log('delete', racket)
    setRackets(rackets.filter((item) => item.id !== racket.id))
    setRacket()
  }

  const updateRacket = (racket) => {
    console.log('update', racket)
    setRackets(rackets.map((item) => item.id === racket.id ? racket : item))
    setRacket(racket)
  }

  return (
    <div>
      <RacketsNew onNew={addRacket} />
      <RacketsShow racket={racket} onDelete={removeRacket} onUpdate={updateRacket}/>
      <RacketsIndex rackets={rackets} onSelect={selectRacket}/>
    </div>
  );
}
