import './css/App.css';
import './css/Search.css';
import './css/Header.css'
import Header from './Components/Header';
import PokeSearch from './Components/PokeSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <PokeSearch />
    </div>
  );
}

export default App;