import './css/App.css';
import './css/Search.css';
import './css/Header.css'
import Header from './Components/Header';
import PokeSearch from './Components/PokeSearch';
import { BrowserRouter, Route, } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Route path="/" component={ PokeSearch } />
    </BrowserRouter>
  );
}

export default App;