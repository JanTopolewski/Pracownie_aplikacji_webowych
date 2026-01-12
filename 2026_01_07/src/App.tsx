import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router"
import Navbar from "./components/Navbar/Navbar.tsx"
import Home from "./pages/Home.tsx"
import Categories from "./pages/Categories.tsx"
import BlogPost from "./pages/BlogPost.tsx"

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="categories" element={<Categories />} />
                <Route path="blogpost" element={<BlogPost />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
