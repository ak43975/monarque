import { Route } from "react-router-dom"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import { Routes } from "react-router-dom"
import Products from "./components/Products"
import Home from "./components/Home"
import Cart from "./components/Cart"
import { Toaster } from "react-hot-toast"
import Checkout from "./components/Checkout"
import OrderSuccess from "./components/OrderSuccess"
import ProductDetails from "./components/ProductDetails"

function App() {

  return (
    <div className="w-[100%]">
      <NavBar></NavBar>
      
      
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/ordersuccess" element={<OrderSuccess></OrderSuccess>}></Route>
          <Route path="/product/:title" element={<ProductDetails />} />
        </Routes>
      

      <Footer></Footer>
      <Toaster></Toaster>
      
    </div>
  )
}

export default App