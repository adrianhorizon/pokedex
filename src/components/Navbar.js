import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import ImagesPokemom from './Images';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div >
          <Link className="Navbar__brand" to="/">
            <ImagesPokemom
              className="Navbar__brand-logo"
              alt="Logo pokemon"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
