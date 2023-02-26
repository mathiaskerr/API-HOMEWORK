const PokeDeck= ({favPokemon}) => {

  const favouriteNodes = favPokemon.map((pokemon,index) => {
     console.log(pokemon.types[0].type.name)
    return (
     <ul className={pokemon.types[0].type.name}> 
     <li><h3>{pokemon.name}</h3></li>
    <li key={pokemon.types[0].type.name}><img id='fav-img'src={pokemon.sprites.other['official-artwork'].front_default}></img></li>
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