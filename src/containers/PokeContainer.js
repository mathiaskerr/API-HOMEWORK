import {useState , useEffect} from 'react';
import Pokemon from '../components/Pokemon';
import PokeSelect from '../components/PokeSelect';
import PokeDeck from '../components/PokeDeck';

const PokeContianer= () => {
  return(
    <div>
        <h1>PokeStats</h1>
        <PokeSelect/>
        <Pokemon/>
        <PokeDeck/>

    </div>
  )
};

export default PokeContianer;