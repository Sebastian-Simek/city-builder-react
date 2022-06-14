import React from 'react';

export default function WaterfrontDropdown({ setWaterfrontId }) {
  return (
    <div>
      Select a Waterfront
      <select onChange={e => setWaterfrontId(e.target.value)}>
        <option value='1'>Dock</option>
        <option value='2'>Sunset</option>
        <option value='3'>Boats</option>
      </select>
    </div>
  );
}
