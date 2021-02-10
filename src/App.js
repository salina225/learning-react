import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  return (
    <>
      <h1>
        Hello React!!
      </h1>

      <Greeting name="Karly" favoriteNumber={9} favoriteColors={["Red", "Purple", "Green"]}/>
      <Greeting name="Mike" favoriteNumber={42} />
      <Greeting name="Rod" favoriteNumber= {43} />
      <Greeting name="Brandon" favoriteNumber= {3} />
    </>
  );
}

export default App;
