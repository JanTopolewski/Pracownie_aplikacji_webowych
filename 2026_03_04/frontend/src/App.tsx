import { Routes, Route } from "react-router"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route index element={<Home />} />
            <Route path={"posts"}>
                <Route index element={<Posts />} />
                <Route path=":id" element={<Post />} />
            </Route>
        </Routes>
        <Footer />
    </>
  )
}

export default App
