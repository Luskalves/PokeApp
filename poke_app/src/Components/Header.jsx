import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import App from '../App';

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className='header'>
          <nav>
            <Link to="/" className="link"> Home </Link>
            <Link to="/My-Pokemons" className="link"> Seus pokemons </Link>
            <Link to="List-Favorites" className="link"> Lista de pokemons </Link>
            <Link to="/Battle" className="link"> Campo de batalha </Link>
          </nav>
        </header>
      </BrowserRouter>
    );
  }
}

export default Header;
