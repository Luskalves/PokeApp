import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class PokeSearch extends Component {
  constructor() {
    super();
    this.pokeName = this.pokeName.bind(this);
    this.pokeApi = this.pokeApi.bind(this);

    this.state = {
      pokeName: '',
      pokeImg: '',
    }
  }

  async pokeApi(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    if(data !== undefined) {
      this.setState({
        pokeImg: data.sprites.front_default,
      })
    } else {
      this.setState({
        pokeImg: '',
      })
    }
  }

  async pokeName({ target }) {
    const { value } = target

    this.setState({
      pokeName: value,
    })
    console.log(this.pokeApi(value))
  }

  componentDidMount() {
    const pokeInicial = ['bulbasaur', 'squirtle', 'charmander']
    const escolha = Math.floor(Math.random() * pokeInicial.length)
    
    this.pokeApi(pokeInicial[escolha])
  }
  render() {

    const { 
      pokeName,
      pokeImg,
     } = this.state;

    return(
      <div  className="search">
        <input type="text" value={ pokeName } onChange={ this.pokeName } />
        <img src={ pokeImg } alt='' />
      </div>
    );
  }
}

export default PokeSearch;
