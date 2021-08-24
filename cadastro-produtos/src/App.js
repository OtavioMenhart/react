import Navbar from './components/navbar'
import Home from './views/home';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>

    </>
  );
}

export default App;
