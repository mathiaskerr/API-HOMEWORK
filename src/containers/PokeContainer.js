import {useState , useEffect} from 'react';
import Pokemon from '../components/Pokemon';
import PokeSelect from '../components/PokeSelect';
import PokeDeck from '../components/PokeDeck';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const PokeContainer= () => {
    const[pokemon, setPokemon] = useState([]);
    const[selectedPokemon, setSelectedPokemon] = useState(null)
    const[pokeInfo, setPokeInfo]=useState([]);

    useEffect(() => {
      getPokemon()
    },[])

    const handlePokemonSelected = (url) => {
      fetch(url)
      .then(response => response.json())
      .then(pokemonData => setSelectedPokemon(pokemonData))
      
    }

    // const selectedPoke = pokemon.find (poke => poke.name === selectedPokemon)

    // const pokeApi = (poke) => {
    //   fetch(poke.url)
    //   .then(response => response.json())
    //   .then(pokemonData => setPokeInfo(pokemonData))
    // }; 
    
    const getPokemon = () => {
      fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.json())
      .then(pokemonData => setPokemon(pokemonData.results))
    } 
  return(
    <div>
        <h1>PokeStats</h1>
        <PokeSelect pokemon={pokemon} handlePokemonSelected={handlePokemonSelected}/>
        {selectedPokemon? <Pokemon selectedPokemon={selectedPokemon} pokeInfo={pokeInfo}/>: null}
        <PokeDeck/>

    </div>
  )
};

export default PokeContainer;