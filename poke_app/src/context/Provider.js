import React from 'react';
import pokeContext from './pokemonContex';

function Provider({ children }) {

  return (
    <pokeContext.Provider>
      {children}
    </pokeContext.Provider>
  )
}

export default Provider;