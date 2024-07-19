import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPLayerName] = useState(initialName)
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  function handleChange(event) {
    setPLayerName(event.target.value)
  }

  let editablePlayName = <span className="player-name">{playerName}</span>
  // let btnCaption = 'Edit'

  if (isEditing) {
    editablePlayName = <input type="text" required value={playerName} onChange={handleChange}/>
    // btnCaption = 'Save'
  }
  
  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayName}        
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}