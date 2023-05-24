import './App.css';
import DisplayCharacter from './component/DisplayCharacter';
import Nav from './component/Nav';
import Base from './component/Base';
import HairColor from './component/HairColor';
import SkinColor from './component/SkinColor';
import { modes } from './helpers/mode';
import useApplicationData from './hooks/useApplicationData';

const App = () => {

  const {mode, setMode, setProfile, characterEndPoint} = useApplicationData();
  
  return (
    <div className="App">
      <DisplayCharacter characterEndPoint={characterEndPoint}/>
      <Nav setMode={setMode}/>
      {mode === modes.base && <Base setProfile={setProfile}/>}
      {mode === modes.skinColor && <SkinColor setProfile={setProfile}/>}
      {mode === modes.hairColor &&<HairColor setProfile={setProfile}/>}
      <button className="save-button">Save</button>
    </div>
  );
}

export default App;
