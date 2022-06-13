import { useState } from 'react';
import './App.css';
import PostCardDisplay from './PostCardDisplay';
import PostCardForm from './PostCardForm';

function App() {
  const [skylineID, setSkylineId] = useState(1);
  const [waterfrontId, setWaterfrontId] = useState(1);
  const [castleId, setCastleId] = useState(1);
  const [cityName, setCityName] = useState('Portland');
  const [citySlogan, setCitySlogan] = useState(['The City of Roses']);
  
  console.log('city slogan', citySlogan);

  return (
    <div className="App">
      <PostCardDisplay 
        skylineID={skylineID}
        waterfrontId={waterfrontId}
        citySlogan={citySlogan}
        castleId={castleId}/>
      <h1>
        Welcome to {cityName}
      </h1>
      <PostCardForm 
        setCityName={setCityName}
        setWaterfrontId={setWaterfrontId}
        setSkylineId={setSkylineId}
        setCastleId={setCastleId}
        setCitySlogan={setCitySlogan}
        citySlogan={citySlogan}
      />
    </div>
  );
}

export default App;
