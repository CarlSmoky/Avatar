import React from 'react'

const AvatarButton = ({ className, setProfile, attribute, avatorName, url }) => {
  return (
    <>
      <button
        className={className}
        onClick={() => setProfile(attribute, avatorName)}
      >
        <img src={url} alt={avatorName} />
      </button>
    </>
  )
}

export default AvatarButton