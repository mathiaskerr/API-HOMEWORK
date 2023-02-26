

const Pokemon= ({selectedPokemon, addToPokeDeck}) => {
    

  const handleClick = () => {
    addToPokeDeck(selectedPokemon)
  };

  const abilities = selectedPokemon.abilities
  const abilityNodes = abilities.map((ability,index) => {

    return <li key={index}>Ability : {ability.ability.name} </li>
   

   
});
   
    return(
      <div>
          <h2>Name : {selectedPokemon.name} </h2>
    
          <ul className="pokemonDetails">
            <li><img src={selectedPokemon.sprites.other['official-artwork'].front_default}></img></li>
            <li>Type: {selectedPokemon.types[0].type.name}</li>
            <li>Weight : {selectedPokemon.weight}</li>
            <li>Height : {selectedPokemon.height}</li>
            
              {abilityNodes}
          
          </ul>
          <button onClick={handleClick}>Capture/Release Pokemon!</button>
      </div>
    )
  };
  
  export default Pokemon;