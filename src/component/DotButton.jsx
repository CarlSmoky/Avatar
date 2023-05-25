import React from 'react'

const DotButton = ({className, setProfile, attribute, hex }) => {
  return (
    <button
      className={className}
      onClick={() => setProfile(attribute, hex)}
    />
    // need to add visually-hidden
  )
}

export default DotButton