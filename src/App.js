import React from 'react';
import './App.css';
import ContactoListaComponente from './components/container/contacto_lista';
// import Clock from './components/pure/clock';

import { config, library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(fas, far);

function App() {
  return (
    <div className="App">
      <ContactoListaComponente></ContactoListaComponente>
      {/* <Clock></Clock> */}
    </div>
  );
}

export default App;
