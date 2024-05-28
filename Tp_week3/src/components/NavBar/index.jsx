import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../store/slice/themeSlice';

const NavBar = () => {

  const user = useSelector((state) => state.user);
  const cartItems = (useSelector((state) => state.cart.items)).length;
  const darkMode = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <nav className={darkMode ? 'dark' : ''}>
      <div className="logo">
        <NavLink className={`home ${darkMode ? 'dark' : ''}`} to={'/'}>EZ Shopping</NavLink>
      </div>
      <div>
        <ul>
          <li>
            <NavLink className={`profile ${darkMode ? 'dark' : ''}`} to={'/profile'}>🧑 {user.firstname} {user.lastname} </NavLink>

          </li>
          <li>
            <NavLink className={`basket ${darkMode ? 'dark' : ''}`} to={'/basket'}>
              {cartItems > 0 ?
                <div>🛒 <strong>{cartItems}</strong> items</div>
                :<div>🛒 Basket</div>
              }
            </NavLink>
          </li>
          <li>
          <button onClick={handleToggleDarkMode} className={`dark-mode-toggle ${darkMode ? 'dark' : ''}`}>
              {darkMode ? '☀️ Light Mode' : '🌑 Dark Mode'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar