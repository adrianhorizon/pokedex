import React, { Component } from 'react'
import './pokemonId.css'

class PokemonId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemon: {}
    };
  }

  getPokemonId (id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          pokemon: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  componentDidMount() {
    
  }

  render() {
    const { error, isLoaded, pokemon } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>{pokemon.name}</h1>
          <span>{pokemon.id}</span>
          <img src={pokemon.sprites.front_default} alt="pokemon"/>
        </div>
      );
    }
  }
}

export default PokemonId
