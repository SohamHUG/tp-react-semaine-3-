import NavBar from "../NavBar/index";
import { Outlet } from "react-router-dom";
import { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectDarkMode } from "../../store/selectors/index";

const MainTemplate = () => {
  const darkMode = useSelector(selectDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default MainTemplate