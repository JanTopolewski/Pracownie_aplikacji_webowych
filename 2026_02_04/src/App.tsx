import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar/Navbar.tsx"
import Home from "./pages/Home/Home.tsx"
import Categories from "./pages/Categories/Categories.tsx"
import Posts from "./pages/Posts/Posts.tsx"

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="categories" element={<Categories />} />
                <Route path="blogpost" element={<Posts />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
