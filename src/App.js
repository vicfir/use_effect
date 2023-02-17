import { Chronometre } from './components/chronometre';
import { Compteur } from "./components/compteur";
import { ProgressBar } from './components/progressBar';
import { Timer } from './components/timer';
import { ToDoList } from './components/toDoList';

function App() {

  

  return (
    <div className="App">
      <Compteur/>
      <Chronometre/>
      <ProgressBar/>
      <Timer/>
      <ToDoList/>
    </div>
  );
}

export default App;
