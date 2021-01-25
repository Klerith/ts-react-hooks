

import { Counter } from './components/Counter';

import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr/>

      <h2>useState:</h2>
      <Counter />

      <Usuario />

      <hr/>
      <h2>useEffect:</h2>
      <TimerPadre />


    </>
  );
}

export default App;
