import React from 'react';
import './styles/Pokemon.css';

const pokemonSearch = () => {
    return (
        <div className="container-pokemon-search">
            <h1>Buscador pokemon</h1>
        </div>
    )
}

const Pokemon = props => {
    const pokemons = props.pokemon;
    if (!pokemons) {
        return pokemonSearch()
    }
    return (
        <div className="container-pokemon">
            <h1 className="pokemon-title">{pokemons.name} <span>No º {pokemons.id}</span></h1>
            <img src={pokemons.sprites.back_default} alt="pokemon-default"></img>
            <img src={pokemons.sprites.front_default} alt="pokemon-back"></img>
            <p>Height: {pokemons.height}</p>
            <p>Weight: {pokemons.weight}</p>
        </div>
    )
}

export default Pokemon;