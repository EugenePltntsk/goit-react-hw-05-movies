import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
        
      <NavLink to="/">Home</NavLink>

      <NavLink to="/movies">Movies</NavLink>

    </nav>
  );
}
