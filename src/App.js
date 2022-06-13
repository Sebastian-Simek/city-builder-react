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
  
  return (
    <div className="App">
      <City skylineID={skylineID}
        waterfrontId={waterfrontId}
        castleId={castleId}
      />
      <h1>
        Welcome to {cityName}
      </h1>
      <div className='bottom'>
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        <CityNameInput setCityName={setCityName}/>
        <section className='dropdowns'>
          <WaterfrontDropdown setWaterfrontId={setWaterfrontId}/>
          <SkylineDropdown setSkylineId={setSkylineId}/>
          <CastleDropdown setCastleId={setCastleId}/>  
        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        {/* here, the SloganList component takes the array of slogans that lives in state */}
        <SloganForm setCitySlogan={setCitySlogan} citySlogan={citySlogan}/>
        <SloganList citySlogan={citySlogan}/>
      </div>
    </div>
  );
}

export default App;
