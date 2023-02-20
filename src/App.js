import  AnimatedButton  from './components/animatedButton';
import { Chronometre } from './components/chronometre';
import { Compteur } from "./components/compteur";
import ProductList from './components/productList';
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
      <AnimatedButton/>
      <ProductList/>
    </div>
  );
}

export default App;
