import {NavLink} from "react-router-dom";

const NavBar = () => {
  
  return (
    <nav >
      <ul style={{listStyle: 'none'}}>
        <li>
          <NavLink to={'/'}>Accueil</NavLink>
        </li>
        <li>
          <NavLink to={'/cart'}>Panier</NavLink>
        </li>
        <li>
          <NavLink to={'/user'}>Utilisateur</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar