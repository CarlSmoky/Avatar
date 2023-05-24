import React from 'react'

const DisplayCharacter = ({characterEndPoint}) => {

  return (
    <div className="display-character">
      <img
        src={characterEndPoint}
        alt="avatar"
      />
    </div>
  )
}

export default DisplayCharacter