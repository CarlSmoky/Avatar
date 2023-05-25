import React from 'react'
import { avatarBase } from '../helpers/options'
import AvatarButton from './AvatarButton'

const Base = ({ setProfile} ) => {

  const avatarButtons = Object.entries(avatarBase).map(([avatorName, url]) => {
    const className = "avatar-button";
    return (
      <AvatarButton
        key={avatorName}
        attribute="base"
        className={className}
        setProfile={setProfile}
        avatorName={avatorName}
        url={url}
      />
    )
  })

  return (
    <div className="base-wrapper">
      <h2>Base</h2>
      {avatarButtons}
    </div>
  )
}

export default Base