import Slogan from './Slogan';

export default function SloganList({ citySlogan }) {
  return (
    <section>
      <h2>Your slogans:</h2>
      {
        citySlogan.map((slogan, i) => <Slogan key={slogan + i} slogan={slogan}/>)
      }
    </section>
  );
}
