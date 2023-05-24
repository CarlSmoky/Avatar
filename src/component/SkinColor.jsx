import React from 'react'

const SkinColor = ({setProfile}) => {

  return (
    <div className="skin-color-wrapper">
      <h2>Skin Color</h2>
      <button className="color-button fair" onClick={() => setProfile("skinColor", "f2d3b1")} name="skinColor" value="f2d3b1" />
      <button className="color-button medium" onClick={() => setProfile("skinColor", "ecad80")} name="skinColor" value="ecad80" />
      <button className="color-button olive" onClick={() => setProfile("skinColor", "9e5622")} name="skinColor" value="9e5622" />
      <button className="color-button brown" onClick={() => setProfile("skinColor", "763900")} name="skinColor" value="763900" />
    </div>
  )
}

export default SkinColor