import City from './City';
import SloganList from './SloganList';

export default function PostCardDisplay({ skylineID, waterfrontId, castleId, citySlogan }) {
  return (
    <div>
      <City 
        skylineID={skylineID}
        waterfrontId={waterfrontId}
        castleId={castleId} />
      <SloganList citySlogan={citySlogan}/>
    </div>
  );
}
