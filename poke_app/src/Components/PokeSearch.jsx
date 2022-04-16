import React, { useContext, useEffect } from 'react';
import pokeContext from '../context/pokemonContex';

function PokeSearch() {

  //teste
  const { search, 
    pokeName, 
    pokeImg, 
    pokeNames, 
    pokeApi, 
    pokeData,
    favouritePokemons,
    setFavourite,
  } = useContext(pokeContext)

    const addFavourite = () => {
      setFavourite(favouritePokemons.push(pokeData))
      console.log(favouritePokemons)
    }

    useEffect(() => {
      const pokeInicial = ['bulbasaur', 'squirtle', 'charmander']
      const escolha = Math.floor(Math.random() * pokeInicial.length)
      pokeApi(pokeInicial[escolha])
    }, [])

  return(
    <div  className="search">
      <input type="text" value={ search } onChange={ pokeNames } />
      <img src={ pokeImg } alt='' />
      <> {pokeName} </>
      <button
        type="button"
        onClick={ addFavourite }
      >
        Adicionar aos Favoritos
      </button>
    </div>
  );
}

export default PokeSearch;
