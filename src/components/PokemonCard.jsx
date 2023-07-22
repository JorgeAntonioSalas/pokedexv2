import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({url}) => {

    const [pokemon, setPokemon] = useState({});

    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(url)
        .then(res => setPokemon(res.data));
    },[])

    return (
        <div onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites?.other['official-artwork'].front_default} alt="" />
        </div>
    );
};

export default PokemonCard;