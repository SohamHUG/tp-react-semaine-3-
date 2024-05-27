import NavBar from "../NavBar/index";
import {Outlet} from "react-router-dom";
const MainTemplate = () => {
  
  return (
    <main>
      <NavBar/>
      <Outlet/>
    </main>
  )
}

export default MainTemplate