import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import {NavBar} from "./components/NavBar.tsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Offer from "./pages/Offer";

function App() {
  return (
      <>
          <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="offer" element={<Offer />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App;
