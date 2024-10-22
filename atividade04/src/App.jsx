
import './App.css'
import Tabela from './components/Tabela'

function App() {

  const arrayObj = [
    { id: 1, nome: "Fernanda", idade: 19 },
    { id: 2, nome: "Gabriel", idade: 20 },
    { id: 3, nome: "Davi", idade: 24 },
    ]
  return (
    <>
      <Tabela propsTabela={arrayObj}></Tabela>

    </>
  )
}

export default App
