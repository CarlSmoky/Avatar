import React from 'react'
import { hairColorHex } from '../helpers/options'
import DotButton from './DotButton'

const HairColor = ({setProfile}) => {

  const hairColors = Object.entries(hairColorHex).map(([nameOfColor, hex]) => {
    const className = `dot-button ${nameOfColor}`;
    return (
      <DotButton
        key={nameOfColor}
        attribute="hairColor"
        className={className}
        hex={hex}
        setProfile={setProfile}
      />
    )
  })

  return (
    <div className="hair-color-wrapper">
      <h2>Hair Color</h2>
      {hairColors}
    </div>
  )
}

export default HairColor