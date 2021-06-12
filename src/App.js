import logo from './logo.svg';
import './App.css';
import Conversor from './componentes/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Money converter <span className="money">(USD to BRL)</span></h1>
      <div className="wrap-box">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </div>
    </div>
  );
} 

export default App;
