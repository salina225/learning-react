import logo from './logo.svg';
import './App.css';
import { Greeting } from './Greeting';

const App = () => {
  return (
    <>
      <h1>
        Hello React!!
      </h1>
      <h2>
        Hello Karly!!!
      </h2>
      <h2>
        Hello Mike!!!
      </h2>
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </>
  );
}

export default App;
