import { useContext } from "react"
import {CartContext} from "../context/CartContext"
import ProductsCard from "./ProductsCard"
import { Product } from "../context/CartContext";
// import banner from "../assets/Banner_page-0001.jpg"

const Products = ()=>{
    const cartContext = useContext(CartContext)
    return(
        <div className="flex w-[95%] mx-auto gap-[30px] flex-wrap justify-around px-[5%] py-[5%]">

            {/* <div className="w-[100%]">
                <img src={banner} alt="" className=""/>
            </div> */}
            
            {cartContext?.prodImg.map((item:Product) => (
                <ProductsCard imageLink={item.image} title={item.title} desc={item.description} Originalprice={item.Originalprice} DiscountedPrice={item.DiscountedPrice} DiscountPerc={item.DiscountPerc} ml={item.ml}></ProductsCard>
            ))}

        </div>
    )
}

export default Products