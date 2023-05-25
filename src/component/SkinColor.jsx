import React from 'react'
import DotButton from './DotButton'
import { skinColorHEX } from '../helpers/options'

const SkinColor = ({ setProfile }) => {

  const skinColors = Object.entries(skinColorHEX).map(([nameOfColor, hex]) => {
    const className = `dot-button ${nameOfColor}`;
    return (
      <DotButton
        key={nameOfColor}
        attribute="skinColor"
        className={className}
        hex={hex}
        setProfile={setProfile}
      />
    )
  })

  return (
    <div className="skin-color-wrapper">
      <h2>Skin Color</h2>
      {skinColors}
    </div>
  )
}

export default SkinColor