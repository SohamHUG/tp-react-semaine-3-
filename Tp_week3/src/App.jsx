import { Route, Routes } from "react-router-dom";
import MainTemplate from "./components/Template/MainTemplate";
import HomePage from "./pages/Home/index.page";
import UserPage from './pages/User/index.page';
import BasketPage from './pages/Basket/index.page';
import { Toaster } from 'react-hot-toast';
import "./index.css"

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/basket'} element={<BasketPage />} />
          <Route path={'/profile'} element={<UserPage />} />

          <Route path={'*'} element={<div>Oups, you seems lost <br />404</div>} />
        </Route>


      </Routes>
      <Toaster
        position="bottom-center"
        reverseOrder={true}
      />
    </>
  )
}

export default App
