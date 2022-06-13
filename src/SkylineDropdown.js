import React from 'react';

export default function SkylineDropdown({ setSkylineId }) {
  return (
    <div>
      Select a Skyline
      <select onChange={e => setSkylineId(e.target.value)}>
        <option value='1'>Busy</option>
        <option value='2'>Pink</option>
        <option value='3'>Foggy</option>
      </select>
    </div>
  );
}
