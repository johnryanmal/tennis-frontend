import axios from 'axios'
import { useState, useEffect  } from 'react'
import { Routes, Route } from 'react-router-dom'

import { RacketsIndex }from './RacketsIndex'
import { RacketsNew } from './RacketsNew'
import { RacketsEdit } from './RacketsEdit'
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

  const racketsNew = <RacketsNew onNew={addRacket} />
  const racketsShow = <RacketsShow racket={racket} onDelete={removeRacket}/>
  const racketsEdit = <RacketsEdit racket={racket} onUpdate={updateRacket}/>
  const racketsIndex = <RacketsIndex rackets={rackets} onSelect={selectRacket}/>

  return (
    <div>
      <Routes>
        <Route path="/new" element={racketsNew}/>
        <Route path="/edit" element={racketsEdit}/>
        <Route path="/show" element={racketsShow}/>
        <Route path="/" element={racketsIndex}/>
      </Routes>
    </div>
  );
}
