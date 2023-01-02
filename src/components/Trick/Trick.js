import './Trick.css'
import Card from '../Card/Card.js'

const Trick = ({tricks, removeTrick}) => {
  const trickCard = tricks.map(trick => {
    return (
      <Card
        id={trick.id}
        name={trick.name}
        obstacle={trick.obstacle}
        stance={trick.stance}
        tutorial={trick.tutorial}
        key={trick.id}
        removeTrick={removeTrick}
      />
    )
  })

  return (
    <div className="trickContainer">
      {trickCard}
    </div>
  )
}

export default Trick
