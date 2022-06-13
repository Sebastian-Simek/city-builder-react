import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  const [skylineID, setSkylineId] = useState(1);
  const [waterfrontId, setWaterfrontId] = useState(1);
  const [castleId, setCastleId] = useState(1);
  const [cityName, setCityName] = useState('Portland');
  const [citySlogan, setCitySlogan] = useState(['The City of Roses']);
  const [sloganForm, setSloganForm] = useState();
  
  return (
    <div className="App">
      <City skylineID={skylineID}
        waterfrontId={waterfrontId}
        castleId={castleId} />
      <h1>
        Welcome to {cityName}
      </h1>
      <div className='bottom'>
        <CityNameInput setCityName={setCityName}/>
        <section className='dropdowns'>
          <WaterfrontDropdown setWaterfrontId={setWaterfrontId}/>
          <SkylineDropdown setSkylineId={setSkylineId}/>
          <CastleDropdown setCastleId={setCastleId}/>  
        </section>
        <SloganForm 
          setCitySlogan={setCitySlogan} 
          citySlogan={citySlogan}
          setSloganForm={setSloganForm}
          sloganForm={sloganForm}/>
        <SloganList citySlogan={citySlogan}/>
      </div>
    </div>
  );
}

export default App;
