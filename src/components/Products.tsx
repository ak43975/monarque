import { useContext } from "react"
import {CartContext} from "../context/CartContext"
import ProductsCard from "./ProductsCard"
import { Product } from "../context/CartContext";

const Products = ()=>{
    const cartContext = useContext(CartContext)
    return(
        <div className="flex w-[95%] mx-auto gap-[30px] flex-wrap justify-around px-[5%] py-[5%]">
            
            {cartContext?.prodImg.map((item:Product) => (
                <ProductsCard imageLink={item.image} title={item.title} desc={item.description} Originalprice={item.Originalprice} DiscountedPrice={item.DiscountedPrice} DiscountPerc={item.DiscountPerc}></ProductsCard>
            ))}
        </div>
    )
}

export default Products