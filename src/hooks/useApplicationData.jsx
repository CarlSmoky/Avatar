import { useEffect, useState } from 'react'
import { modes } from '../helpers/mode';

const useApplicationData = () => {

  const [mode, setMode] = useState(modes.base);

  const [characterEndPoint, setCharacterEndPoint] = useState("")

  const [attributes, setAttributes] = useState({
    base: "Jasmine",
    skinColor: "",
    hairColor: ""
  })
  
  const setProfile = (name, value) => {
    setAttributes(prev => ({...prev, [name]: value}));
  }

  useEffect(() => {
    
    let url = "https://api.dicebear.com/6.x/adventurer/svg?size=120&"
    if(attributes.base) {
      url += `seed=${attributes.base}&`;
    }
    if(attributes.skinColor) {
      url += `skinColor=${attributes.skinColor}&`;
    }
    if(attributes.hairColor) {
      url += `hairColor=${attributes.hairColor}&`;
    }
    
    setCharacterEndPoint(url);
  }, [attributes])

  return {
    mode,
    setMode,
    characterEndPoint,
    attributes,
    setAttributes,
    setProfile
  }
}

export default useApplicationData