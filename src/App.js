import { Chronometre } from './components/chronometre';
import { Compteur } from "./components/compteur";
import { ProgressBar } from './components/progressBar';
import { Timer } from './components/timer';

function App() {

  

  return (
    <div className="App">
      <Compteur/>
      <Chronometre/>
      <ProgressBar/>
      <Timer/>
    </div>
  );
}

export default App;
