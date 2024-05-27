import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const NavBar = () => {

  const user = useSelector((state) => state.user);

  return (
    <nav>
      <div>
        <NavLink className={'home'} to={'/'}>EZ Shopping</NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink className={'profile'} to={'/profile'}>{user.firstname} {user.lastname} </NavLink>

          </li>
          <li>
            <NavLink className={'basket'} to={'/cart'}>Panier</NavLink>
          </li>
          <li>
            <NavLink to={'/'}>Dark Mode</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar