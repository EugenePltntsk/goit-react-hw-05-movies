import React from 'react';
import { NavLink } from 'react-router-dom';
import css from "./Header.module.css"

export default function Header() {
  return (
    <nav className={css.Nav}>

      <NavLink className={css.Home} to="/">Home</NavLink>

      <NavLink className={css.Movies} to="/movies">Movies</NavLink>

    </nav>
  );
}
