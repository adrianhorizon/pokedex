import React, { Component } from 'react'
import './search.css'

class Search extends Component { 
    render() {
        return(
            <div className="search-container">
                <input className="search-input" type="text" placeholder="buscar pokemon"></input>
            </div>
        );
    }
}

export default Search