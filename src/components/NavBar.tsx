import monarque from "../assets/monarqueCropped.png"
import search from "../assets/searchMonarque.svg"
import person from "../assets/personMonarque.svg"
import cartImg from "../assets/cartMonarque2.svg"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"

const NavBar = () => {

    const navigate = useNavigate()
    const cartContext = useContext(CartContext); // Get cart state from context

    if(!cartContext){
        return <p>Loading...</p>;
    }

    const {cart} = cartContext
    const cartItems = cart
    const cartItemCount = cartItems.length;

    const scrollToSection = (id:string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <div className="w-[100%]  border-amber-600">
            <div className=" bg-[#3C0B04] w-[100%] py-[0.5%] flex justify-end ">
                <div className=" border-black w-[62%] flex justify-between items-center px-[5%]">
                    <img src={monarque} alt="" className="h-[67px] w-[219px]  " />

                    <div className="flex gap-[20px] text-[16px] font-[400] ">
                        <div><img src={search} alt="" className="cursor-pointer" /></div>
                        <div><img src={person} alt="" className="cursor-pointer" /></div>
                        
                        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
                            <img src={cartImg} alt="Cart" />
                            {cartItemCount > 0 && (
                                <span className="absolute top-[-5px] right-[-5px] bg-red-600 text-white text-[12px] w-[18px] h-[18px] flex items-center justify-center rounded-full">
                                    {cartItemCount}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#3C0B04] w-[100%] flex justify-center text-white gap-[2%] py-[0.4%] pb-[0.7%] ">
                <span className="cursor-pointer" onClick={()=> navigate("/")}>Home</span>
                <span className="cursor-pointer" onClick={()=> navigate("/products")}>Products</span>
                <span className="cursor-pointer" onClick={() => scrollToSection("team")}>Our Team</span>
                <span className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact Us</span>
            </div>
        </div>
    )
}

export default NavBar