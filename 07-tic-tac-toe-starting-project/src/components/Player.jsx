import { useState } from "react"

export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    setIsEditing(!isEditing)
  }

  let playName = <span className="player-name">{name}</span>
  // let btnCaption = 'Edit'

  if (isEditing) {
    playName = <input type="text" required value={name} />
    // btnCaption = 'Save'
  }
  
  return (
    <li>
      <span className="player">
        {playName}        
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}