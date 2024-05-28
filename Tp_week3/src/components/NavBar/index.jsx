import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../store/slice/themeSlice';
import { selectUserFirstName, selectUserLastName, selectCartItemCount, selectDarkMode } from '../../store/selectors/index';

const NavBar = () => {

  const firstname = useSelector(selectUserFirstName);
  const lastname = useSelector(selectUserLastName);
  const cartItems = useSelector(selectCartItemCount);
  const darkMode = useSelector(selectDarkMode);
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
            <NavLink className={`profile ${darkMode ? 'dark' : ''}`} to={'/profile'}>🧑 {firstname} {lastname} </NavLink>

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