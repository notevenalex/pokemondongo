import { Routes, Route } from "react-router-dom"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home"
import { YesNoApi } from "./pages/YesNoApi"
import { BreakingBad } from "./pages/BreakingBad"
import { Menu } from "./components/Menu"

function App() {
  

  return (
    <>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/yesno" element={<YesNoApi />}></Route>
        <Route path="/breaking" element={<BreakingBad />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
