import React from 'react'

const HairColor = ({setProfile}) => {

  return (
    <div className="hair-color-wrapper">
      <h2>Hair Color</h2>
      <button className="color-button blue" onClick={() => setProfile("hairColor", "85c2c6")} />
      <button className="color-button gold" onClick={() => setProfile("hairColor", "e5d7a3")} />
      <button className="color-button purple" onClick={() => setProfile("hairColor", "592454")} />
      <button className="color-button silver" onClick={() => setProfile("hairColor", "afafaf")} />
    </div>
  )
}

export default HairColor