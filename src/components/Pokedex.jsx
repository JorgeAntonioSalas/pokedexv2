import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import navigate from 'navigate';
import { useNavigate } from 'react-router-dom';


const Pokedex = () => {

    const name = useSelector(state=>state.userName)

    const [pokemonList, setPokemonList] = useState([]);
    const [typeList, setTypeList] = useState([]);
    const [nameInput, setNameInput] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then(res=>setPokemonList(res.data.results))

        //para cargar el tipo seleccionado
        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res=>setTypeList(res.data.results))

    },[]);

    console.log(typeList)

    const searchName = ()=>{
        navigate(`/pokedex/${nameInput}`)
    }

    const searchType = (typeName)=> {
        alert(typeName)
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <p>Hi {name}, welcome to the Pokedex!</p>
            <div>
                <input 
                    type="text" 
                    placeholder='search by name'
                    value={nameInput}
                    onChange={e=>setNameInput(e.target.value)}
                />
                <button onClick={searchName}>Search</button>
            </div>
            <div>
                <select onChange={e => searchType(e.target.value)}>
                    <option value="">Select type</option>
                    {typeList.map(type => (
                        <option value={type.name + " loaded"} key={type.name}> {type.name} </option>
                    ))}
                </select>
            </div>
            <div className="pokemon-container">
                <div className="col-pokemon">
                    {
                        pokemonList.map(pokemon =>
                        <PokemonCard url={pokemon.url} key={pokemon.id}/>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Pokedex;