import './App.css';
import Cor from './components/Cor';

const App = () => {
  return (
    <div>
      <h1>Título</h1>
      <Cor propsCor={true}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Cor>
      <Cor propsCor={false}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</Cor>
    </div>
  );
}

export default App;
