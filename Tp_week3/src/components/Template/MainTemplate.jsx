import NavBar from "../NavBar/index";
import {Outlet} from "react-router-dom";
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

const MainTemplate = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <main>
      <NavBar/>
      <Outlet/>
    </main>
  )
}

export default MainTemplate