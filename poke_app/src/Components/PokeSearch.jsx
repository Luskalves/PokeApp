import React, { useContext, useEffect } from 'react';
import pokeContext from '../context/pokemonContex';

function PokeSearch() {

  const { search, 
    pokeName, 
    pokeImg, 
    pokeNames, 
    pokeApi } = useContext(pokeContext)

    useEffect(() => {
      const pokeInicial = ['bulbasaur', 'squirtle', 'charmander']
      const escolha = Math.floor(Math.random() * pokeInicial.length)
      pokeApi(pokeInicial[escolha])
    },[])

  return(
    <div  className="search">
      <input type="text" value={ search } onChange={ pokeNames } />
      <img src={ pokeImg } alt='' />
      <> {pokeName} </>
    </div>
  );
}

export default PokeSearch;
