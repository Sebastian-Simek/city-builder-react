
import { useState } from 'react';

export default function SloganForm({ setCitySlogan, citySlogan }) {

  const [sloganForm, setSloganForm] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
  
    // citySlogan.push(sloganForm);
    // setCitySlogan(citySlogan.slice());

    setCitySlogan([...citySlogan, sloganForm]);

    setSloganForm('');
    // set the sloganInput form state to an empty string to reset the form
  }

  return (
    <section>
      {/* on submit, call the handleSubmit function, defined above */}
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        {/* on change, set the sloganInput in state to be the input value */}
        {/* also, weirdly, set the value of this input to the sloganInput tracked in state to make this a 'controlled' form input */}

        <input value={sloganForm} onChange={e => setSloganForm(e.target.value)}/>
        <button>Submit</button>
      </form>
    </section>
  );
}
