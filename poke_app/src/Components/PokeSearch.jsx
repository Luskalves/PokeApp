import React, { useContext, useEffect } from 'react';
import missigno from '../images/Missingno.jpg'
import pokeContext from '../context/pokemonContex';
// import PropTypes from 'prop-types';

function PokeSearch() {

  const { search, 
    pokeName, 
    pokeImg, 
    pokeNames, 
    pokeApi } = useContext(pokeContext)

  // componentDidMount() {
  //   const pokeInicial = ['bulbasaur', 'squirtle', 'charmander']
  //   const escolha = Math.floor(Math.random() * pokeInicial.length)
    
  //   pokeApi(pokeInicial[escolha])
  // }

  return(
    <div  className="search">
      <input type="text" value={ search } onChange={ pokeNames } />
      <img src={ pokeImg } alt='' />
      <> {pokeName} </>
    </div>
  );
}

export default PokeSearch;
