import './App.css';
import Header from './Componentes/Header';
import Pesquisa from './Componentes/Pesquisa';
import UltimosLancamentos from './Componentes/UltimoLancamentos'

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Pesquisa />

      </div>
      <UltimosLancamentos />
    </>
  )
}

export default App;
