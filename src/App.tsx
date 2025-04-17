import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { Menu } from "./components/Menu"
import { PokeApi } from "./pages/PokeApi"

function App() {
  

  return (
    <>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/poke" element={<PokeApi />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
