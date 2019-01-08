import React, { Component } from 'react';
import api from '../utils/api';
import Pokemon from '../components/Pokemon';
import PageLoading from '../components/PageLoading';
import './styles/Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            loading: true,
            error: null,
            data: undefined,
        };
    }

    handleChange = event => {
        this.setState({ value: event.target.value });
    }

    useSearchPokemon = async event => {
        this.setState({ loading: true, error: null });
        event.preventDefault();
        try {
            if(this.state.value) {
                let pokemon = await api.pokemon.getPokemon(this.state.value);
                this.setState({ loading: false, data: pokemon });
            } else {
                this.setState({ loading: false, data: undefined });    
            }
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        if (this.state.loading === true && this.state.data) {
            return <PageLoading />
        }
        return (
            <div>
                <div className="container-search">
                    <form onSubmit={this.useSearchPokemon}>
                        <input className="search" placeholder="search pokemon" type="text" value={this.state.value} onChange={this.handleChange} />
                        <button className="container-button" type="submit" value="Submit">Search</button>
                    </form>
                </div>
                <Pokemon
                    pokemon={this.state.data}
                />
            </div>
        )
    }
}

export default Home;