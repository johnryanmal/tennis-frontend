import { Link } from 'react-router-dom'

import { RacketsDelete } from './RacketsDelete'

export function RacketsShow(props) {
  const racket = props.racket
  
  return (
    <div>
      <h1>Rackets Show</h1>
      {racket && <div>
        <h2>Racket</h2>
        <p>Created at: {racket.created_at}</p>
        <p>Updated at: {racket.updated_at}</p>
        {racket.description && (<p>Description:<br/>{racket.description}</p>)}
        <Link to="/edit">
          <button>Edit</button>
        </Link>
        <RacketsDelete racket={racket} onDelete={props.onDelete}/>
      </div>}
      <hr/>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
