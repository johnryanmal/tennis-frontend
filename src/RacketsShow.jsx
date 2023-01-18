import { RacketsDelete } from './RacketsDelete'
import { RacketsEdit } from './RacketsEdit'

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
        <RacketsDelete racket={racket} onDelete={props.onDelete}/>
        <RacketsEdit racket={racket} onUpdate={props.onUpdate}/>
      </div>}
    </div>
  );
}
