import React, { Component } from 'react'
import './App.css'
import Search from '../search/components/search'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      pokemon: []
    };
  }

  getPokemon () {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        this.setState({
          isLoaded: true,
          pokemon: result.results
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
    this.getPokemon()
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
        <Search/>
          <div className="grid">
            {pokemon.map(item =>
                <div key={item.name}>
                  <span>{item.name}</span>
                </div>
              )}
          </div>
        </div>
      );
    }
  }
}

export default App
