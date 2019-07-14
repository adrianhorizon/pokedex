import React from 'react';
import PokemonLogo from '../images/pokemonLogo.png'

function ImagesPokemom(props) {
    return(
        <img
        className={props.className} 
        src={PokemonLogo}
        alt="Logo Pokemon"
        />   
    );
}

export default ImagesPokemom;