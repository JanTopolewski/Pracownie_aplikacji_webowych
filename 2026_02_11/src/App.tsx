import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Posts from "./pages/Posts"
import SinglePost from "./pages/SinglePost";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path="categories" element={<Categories />} />
            <Route path="post">
                <Route index element={<Posts />} />
                <Route path=":id" element={<SinglePost />} />
            </Route>
        </Routes>
        <Footer />
    </>
  )
}

export default App
