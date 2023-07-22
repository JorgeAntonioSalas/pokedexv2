import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const PokemonDetail = () => {

    const {id} = useParams();
    const [ pokemon, setPokemon] = useState({});

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=>setPokemon(res.data))
    },[id])

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="" />
            <p><b>Types: </b> {pokemon?.types?.[0]?.type.name}  {pokemon?.types?.[1]?.type.name} </p> 
            <p><b>HP </b> {pokemon.stats?.[0].base_stat} </p>
            <p><b>Attack: </b> {pokemon.stats?.[1].base_stat} </p>
            <p><b>Defense: </b> {pokemon.stats?.[2].base_stat} </p>
            <p><b>Speed: </b> {pokemon.stats?.[5].base_stat} </p>
        </div>
    );
};

export default PokemonDetail;