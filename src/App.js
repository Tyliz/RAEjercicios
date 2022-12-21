import logo from './logo.svg';
import './App.css';
import ContactoListaComponente from './components/container/contacto_lista';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoListaComponente></ContactoListaComponente>
      </header>
    </div>
  );
}

export default App;
