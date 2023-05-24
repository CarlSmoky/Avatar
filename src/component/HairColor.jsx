import React from 'react'

const HairColor = ({setProfile}) => {

  return (
    <div className="hair-wrapper">
      <h2>Hair Color</h2>
      <button className="color_button blue" onClick={() => setProfile("hairColor", "85c2c6")} />
      <button className="color_button gold" onClick={() => setProfile("hairColor", "e5d7a3")} />
      <button className="color_button purple" onClick={() => setProfile("hairColor", "592454")} />
      <button className="color_button silver" onClick={() => setProfile("hairColor", "afafaf")} />
    </div>
  )
}

export default HairColor