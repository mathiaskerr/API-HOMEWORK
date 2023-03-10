import {useState , useEffect} from 'react';
import Pokemon from '../components/Pokemon';
import PokeSelect from '../components/PokeSelect';
import PokeDeck from '../components/PokeDeck';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const PokeContainer= () => {
    const[pokemon, setPokemon] = useState([]);
    const[selectedPokemon, setSelectedPokemon] = useState(null)
    const[favPokemon, setFavPokemon]=useState([]);

    useEffect(() => {
      getPokemon()
    },[])

    const handlePokemonSelected = (url) => {
      fetch(url)
      .then(response => response.json())
      .then(pokemonData => setSelectedPokemon(pokemonData))
      
    }

    const getPokemon = () => {
      fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.json())
      .then(pokemonData => setPokemon(pokemonData.results))
    } 


    const addToPokeDeck = (favPoke) => {


    
      if (!favPokemon.includes(favPoke)){
        const updatedFavPokemon = [...favPokemon, favPoke];
        setFavPokemon(updatedFavPokemon)
      }
      else {favPokemon.includes(favPoke)
        const updatedFavPokemon = [...favPokemon]
        const newFavPokemon = [];

        for (let poke of updatedFavPokemon){
          if(!poke === favPoke){
            newFavPokemon.push(poke)
          }
        
        }
        setFavPokemon(newFavPokemon)
      }
    }
      
    

  return(
    <div>
        <h1>PokeStats</h1>
        <PokeSelect pokemon={pokemon} handlePokemonSelected={handlePokemonSelected}/>
        {selectedPokemon? <Pokemon selectedPokemon={selectedPokemon} addToPokeDeck={addToPokeDeck}/>: null}
        <PokeDeck favPokemon={favPokemon}/>

    </div>
  )
};

export default PokeContainer;