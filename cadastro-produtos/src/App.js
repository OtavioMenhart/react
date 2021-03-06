import Navbar from './components/navbar'
import Rotas from './rotas'
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="container">
        <Rotas />
      </div>

    </HashRouter>
  );
}

export default App;
