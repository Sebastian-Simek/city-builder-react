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
  const [castleId, setCastleID] = useState(1);
  const [cityName, setCityName] = useState('Portland');
  const [citySlogan, setCitySlogan] = useState(['The City of Roses']);

  return (
    <div className="App">
      {/* here, the City component takes in skylineId, waterfrontId, castleId as props. It'll use those ids to render pictures correctly. */}
      <City skylineID={skylineID}
        waterfrontId={waterfrontId}
        castleId={castleId}
      />
      <h1>
        {/* dynamically update the city name here using state */}
        Welcome to beautiful Portland!
      </h1>
      <div className='bottom'>
        {/* here, the CityNameInput component takes in the setCityName state handler function */}
        <section className='dropdowns'>
          {/* 
          render all three Dropdown components (WaterfrontDropdown, SkylineDropdown, CastleDropdown) here. 
          
          In each Dropdown, pass as props the state handler functions defined above, so that these child components can manipulate parent state 
          */}
        </section>
        {/* here, the SloganForm component takes in the setSlogans state handler function and the slogans array that live in state */}
        {/* here, the SloganList component takes the array of slogans that lives in state */}

      </div>
    </div>
  );
}

export default App;
