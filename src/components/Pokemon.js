

const Pokemon= ({selectedPokemon}) => {
    
  

    // const getPokemonInfo=() => {
    //   pokeApi(selectedPokemon)
    // }
    return(
      <div>
          <h2>Name : {selectedPokemon.name} {selectedPokemon.weight}</h2>
          
      </div>
    )
  };
  
  export default Pokemon;