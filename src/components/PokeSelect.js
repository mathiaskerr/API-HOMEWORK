const PokeSelect= ({pokemon, handlePokemonSelected}) => {

    const handleChange= (event) => {
        handlePokemonSelected(event.target.value)
        
      }


    const pokeNodes = pokemon.map((poke,index) => {
            return <option key={index} value={poke.url}>{poke.name} </option>
        });
    



    return(

    
        <div>
            <select defaultValue="" onChange={handleChange} >

            <option value="" >Choose A Pokemon</option> 
                {pokeNodes}
            </select>
    
        </div>
    )
};

export default PokeSelect;