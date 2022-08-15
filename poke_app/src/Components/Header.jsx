import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <nav>
          <Link to="/" className="link"> Home </Link>
          <Link to="/My-Pokemons" className="link"> Seus pokemons </Link>
          <Link to="List-Favorites" className="link"> Lista de pokemons </Link>
          <Link to="/Battle" className="link"> Campo de batalha </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
