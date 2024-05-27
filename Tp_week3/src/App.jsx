import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import  MainTemplate  from "./components/Template/MainTemplate";

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainTemplate />}>
          <Route path={'/'} element={<div>Accueil</div>} />
          <Route path={'/cart'} element={<div>Panier</div>} />
          <Route path={'/user'} element={<div>Utilisateur</div>} />

          <Route path={'*'} element={<div>Oups, you seems lost</div>} />
        </Route>

      </Routes>
    </>
  )
}

export default App
