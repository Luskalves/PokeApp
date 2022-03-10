import React, { Component } from 'react';
import missigno from '../images/Missingno.jpg'
// import PropTypes from 'prop-types';

class PokeSearch extends Component {
  constructor() {
    super();
    this.pokeName = this.pokeName.bind(this);
    this.pokeApi = this.pokeApi.bind(this);

    this.state = {
      search: '',
    }
  }

  async pokeApi(name) {

    if(name === '0' || name.toLowerCase() === 'missingno') {
      setTimeout(() => {
        this.setState({
          pokeName: 'MissingNo',
          pokeImg: missigno,
        })
      }, 5000);
    }

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    if(data !== undefined) {
      this.setState({
        pokeName: data.name,
        pokeImg: data.sprites.front_default,
      })
    }
  }

  async pokeName({ target }) {
    const { value } = target

    this.setState({
      search: value,
    })
    this.pokeApi(value)
  }

  componentDidMount() {
    const pokeInicial = ['bulbasaur', 'squirtle', 'charmander']
    const escolha = Math.floor(Math.random() * pokeInicial.length)
    
    this.pokeApi(pokeInicial[escolha])
  }
  render() {

    const { 
      search,
      pokeImg,
      pokeName,
     } = this.state;

    return(
      <div  className="search">
        <input type="text" value={ search } onChange={ this.pokeName } />
        <img src={ pokeImg } alt='' />
        <> {pokeName} </>
      </div>
    );
  }
}

export default PokeSearch;
