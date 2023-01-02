import './Card.css'

const Card = ({id, name, obstacle, stance, tutorial}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{obstacle}</p>
      <p>{stance}</p>
      <a href={tutorial}>TUTORIAL</a>
    </div>
  )
}

export default Card
