import React, { useState } from 'react';
import pokeContext from './pokemonContex';

function Provider({ children }) {

  const [favouritePokemons, setFavourite] = useState([]);

  return (
    <pokeContext.Provider >
      {children}
    </pokeContext.Provider>
  )
}

export default Provider;