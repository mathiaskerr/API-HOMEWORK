const PokeDeck= ({favPokemon}) => {

  const favouriteNodes = favPokemon.map((pokemon,index) => {
    //  console.log(pokemon.types[0].type.name)
    return (
     <ul className={pokemon.types[0].type.name}> 
     <div className="pic-border">
     
    <li key={pokemon.types[0].type.name}><img id='fav-img'src={pokemon.sprites.other['official-artwork'].front_default}></img></li>
    </div>
    
    <li><h2>{pokemon.name}</h2></li>
    <li id="type">Type : {pokemon.types[0].type.name}</li>
    <li> HP: {pokemon.stats[0].base_stat}</li>
    <li>Attack: {pokemon.stats[1].base_stat}</li>
    <li>Defense:{pokemon.stats[2].base_stat}</li>
    </ul>
  )})
    return(
      <div >
          <h2>Pokedex</h2>
          
          <ul className="fav">
            {favouriteNodes}
            
          </ul>

     
      </div>
    )
  };
  
  export default PokeDeck;