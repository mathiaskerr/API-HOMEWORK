const PokeDeck= ({favPokemon}) => {

  const favouriteNodes = favPokemon.map((pokemon,index) => {
     
    return (
     <ul> 
     <li><h3>{pokemon.name}</h3></li>
    <li key={index}><img id='fav-img'src={pokemon.sprites.other['official-artwork'].front_default}></img></li>
    </ul>
  )})
    return(
      <div>
          <h2>Pokedex</h2>
          
          <ul className="fav">
            {favouriteNodes}

            
          </ul>
      </div>
    )
  };
  
  export default PokeDeck;