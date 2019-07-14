import 'isomorphic-fetch'
import { polyfill } from 'es6-promise'
polyfill()
const BASE_API = 'https://pokeapi.co/api/v2/'

const api = {
    pokemon: {
        async getPokemon(id) {
                const response = await fetch(`${BASE_API}pokemon/${id}`)
                const pokemon = await response.json()
                return pokemon
        },
  async getImage(url) {
            const response = await fetch(url)
            const data = await response.blob()
            return data
        }
    }
}

export default api;
