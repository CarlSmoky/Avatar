import React from 'react'

const Base = ({ setProfile} ) => {

  return (
    <div className="base-wrapper">
      <h2>Base</h2>
      <button name="base" value="Hello">
        <img onClick={() => setProfile("base", "Jasmine")}
        src="https://api.dicebear.com/6.x/adventurer/svg?seed=Jasmine&size=60&"
        alt="avatar-Jasmine" />
      </button>
      <button onClick={() => setProfile("base", "Milo")} name="base" value="Milo">
        <img
        src="https://api.dicebear.com/6.x/adventurer/svg?seed=Milo&size=60&"
        alt="avatar-Milo" />
      </button>
      <button >
        <img onClick={() => setProfile("base", "Oliver")} name="base" value="Oliver"
        src="https://api.dicebear.com/6.x/adventurer/svg?seed=Oliver&size=60&"
        alt="avatar-Oliver" />
      </button>
      <button onClick={() => setProfile("base", "Jasper")} name="base" value="Jasper">
        <img
        src="https://api.dicebear.com/6.x/adventurer/svg?seed=Jasper&size=60&"
        alt="avatar-Jasper" />
      </button>
    </div>
  )
}

export default Base