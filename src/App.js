import logo from './logo.svg';
import './App.css';
// import ContactoListaComponente from './components/container/contacto_lista';
import Clock from './components/pure/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ContactoListaComponente></ContactoListaComponente> */}
        <Clock></Clock>
      </header>
    </div>
  );
}

export default App;
