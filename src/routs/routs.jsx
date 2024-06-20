import { Route, Routes } from "react-router-dom"
import Home from "../pages/home"
import Otherstores from "../pages/otherstores"


const Routs = () => {
  return (

<Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/otherstores"  element={<Otherstores />} />
</Routes>



  )
}

export default Routs