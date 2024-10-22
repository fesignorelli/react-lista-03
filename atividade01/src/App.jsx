import './App.css'
import Lista from './components/Lista'

function App() {
  
  const listaItems = [
    "Gabriel", "Fernanda", "Claudio", "Lara"
  ]
  return (
    <>
     <Lista propsLista={listaItems}></Lista>

    </>
  )
}

export default App
