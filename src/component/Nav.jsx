import React from 'react'
import { modes } from '../helpers/mode';

const Nav = ({ setMode }) => {

  return (
    <div className="nav-wrapper">
      <ul>
        <li onClick={() => setMode(modes.base)}>
          Base
        </li>
        <li onClick={() => setMode(modes.skinColor)}>
          Skin color
        </li>
        <li onClick={() => setMode(modes.hairColor)}>
          Hair color
        </li>
      </ul>
    </div>
  )
}

export default Nav