import React from 'react'
import "./Navbar.css"

import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      {/* {<Link to="/">Home</Link>
      <a href="/about">Sobre</a>} */}
      <NavLink to="/" //</nav>className={({isActive})=> (isActive ? "esta-ativo" : "nao-ativo")}
      >Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>

    </nav>
  )
}

export default Navbar
