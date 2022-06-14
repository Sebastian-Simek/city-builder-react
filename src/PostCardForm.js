import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';

export default function PostCardForm({ setCityName, setWaterfrontId, setSkylineId, setCastleId, setCitySlogan, citySlogan }) {
  return (
    <div>
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
        />
        
      </div>
    </div>
  );
}
