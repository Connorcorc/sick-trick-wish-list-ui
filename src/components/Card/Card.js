import './Card.css'

const Card = ({id, name, obstacle, stance, tutorial, removeTrick}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{obstacle}</p>
      <p>{stance}</p>
      <a href={tutorial}>TUTORIAL</a>
      <button onClick={() => removeTrick(id)}>Forget This!</button>
    </div>
  )
}

export default Card
