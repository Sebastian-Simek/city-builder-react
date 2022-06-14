import React from 'react';

export default function CityNameInput({ setCityName }) {
  return (
    <section>
      What is your city name?
      <input onChange={e => setCityName(e.target.value)}/>
    </section>
  );
}
