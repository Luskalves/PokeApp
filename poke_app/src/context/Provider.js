import React, { useState } from 'react';
import missigno from '../images/Missingno.jpg'
import pokeContext from './pokemonContex';

function Provider({ children }) {

  const [search, setSearch] = useState('');
  const [pokeName, setPokeName] = useState('');
  const [pokeImg, setImg] = useState('');
  const [favouritePokemons, setFavourite] = useState([]);
  const [pokeData, setPokeData] = useState({});

  const pokeApi = async (name) => {
    console.log('api foi')

    if(name === '0' || name.toLowerCase() === 'missingno') {
      setTimeout(() => {
          setPokeName('MissingNo')
          setImg(missigno)
        }
      , 5000);
    }
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    console.log(data)
    if(data !== undefined) {
      setPokeName(data.name);
      setImg(data.sprites.front_default)
    }
    setPokeData(data);
  }

  const pokeNames = async ({ target }) => {
    const { value } = target
    setSearch(value)
    console.log('names foi')
    pokeApi(search)
  }

  const states = {
    search,
    setSearch,
    favouritePokemons,
    setFavourite,
    pokeApi,
    pokeName,
    pokeNames,
    pokeImg,
  } 

  return (
    <pokeContext.Provider value={ states }>
      {children}
    </pokeContext.Provider>
  )
}

export default Provider;