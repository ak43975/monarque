import monarque from "../assets/monarqueCropped.png"
import cartImg from "../assets/cartMonarque2.svg"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { useContext } from "react"
import up from "../assets/Size2.svg"

const NavBar = () => {

    const navigate = useNavigate()
    const cartContext = useContext(CartContext); // Get cart state from context

    if (!cartContext) {
        return <p>Loading...</p>;
    }

    const { cart } = cartContext
    const cartItems = cart
    const cartItemCount = cartItems.length;

    const scrollToSection = (id: string) => {
        if (window.location.pathname !== "/") {
            navigate("/", { state: { scrollTo: id } }); // Navigate to home with state
        } else {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };


    return (
        <div className="w-[100%]  border-amber-600">
            <div className=" bg-[#3C0B04] w-[100%] flex justify-end py-[0.5%]">
                <div className=" border-black w-[100%] flex justify-between items-center px-[5%]">
                    <img src={monarque} alt="" className=" h-auto w-[160px] pt-[0.2%]  " onClick={() => navigate("/")} />

                    <div className="bg-[#3C0B04]  w-[100%] flex justify-center items-center text-white gap-[2%] py-[0.4%] text-sm pr-[10%]">
                        <span className=" cursor-pointer" onClick={() => navigate("/")}>Home</span>
                        <span className="cursor-pointer" onClick={() => navigate("/products")}>Products</span>
                        <span className="cursor-pointer" onClick={() => scrollToSection("team")}>Our Team</span>
                        <span className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact Us</span>
                    </div>

                    <div className="flex gap-[20px] text-[16px] font-[400] ">
                        {/* <div><img src={search} alt="" className="cursor-pointer" /></div>
                        <div><img src={person} alt="" className="cursor-pointer" /></div> */}

                        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
                            <img src={cartImg} alt="Cart" />
                            {cartItemCount > 0 && (
                                <span className="absolute top-[-30%] right-[-30%] bg-red-600 text-white text-[12px] w-[15px] h-[15px] flex items-center justify-center rounded-full">
                                    {cartItemCount}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="bg-[#3C0B04] w-[100%] flex justify-center text-white gap-[2%] py-[0.4%] pb-[1.5%] text-sm">
                <span className=" cursor-pointer" onClick={() => navigate("/")}>Home</span>
                <span className="cursor-pointer" onClick={() => navigate("/products")}>Products</span>
                <span className="cursor-pointer" onClick={() => scrollToSection("team")}>Our Team</span>
                <span className="cursor-pointer" onClick={() => scrollToSection("contact")}>Contact Us</span>
            </div> */}

            <div className="bg-[#3C0B04] flex justify-center p-[0.5%] border border-white w-[50px] h-[50px] rounded-full fixed z-20 top-[91%] right-[1%] shadow-sm shadow-white" onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}>
                <img src={up} alt="" />
            </div>


        </div>
    )
}

export default NavBar