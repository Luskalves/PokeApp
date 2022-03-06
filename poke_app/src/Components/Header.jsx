import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../App';

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <header className='header'>
          <nav>
            <Route exact path="/home" component={ App }> Home </Route>
            <Route> Seus pokemons </Route>
            <Route> Lista de pokemons </Route>
            <Route> Campo de batalha </Route>
          </nav>
        </header>
      </BrowserRouter>
    );
  }
}

export default Header;
