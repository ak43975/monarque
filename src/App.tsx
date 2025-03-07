import { BrowserRouter, Route } from "react-router-dom"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import HomeProducts from "./components/HomeProducts"
import HomeSection2 from "./components/HomeSection2"
import NavBar from "./components/NavBar"
import Team from "./components/Team"
import WhyTrust from "./components/WhyTrust"
import { Routes } from "react-router-dom"
import Products from "./components/Products"
import Home from "./components/Home"
import Cart from "./components/Cart"

function App() {

  return (
    <div className="w-[100%]">
      <NavBar></NavBar>
      
      
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
      

      <Footer></Footer>
      
    </div>
  )
}

export default App