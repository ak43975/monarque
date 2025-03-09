import phone from "../assets/phone.svg"
import message from "../assets/message.svg"
import monarque from "../assets/monarqueCropped.png"
// import facebook from "../assets/facebook.svg"
import insta from "../assets/Insta.svg"
// import yt from "../assets/yt.svg"
import linkedin from "../assets/linkedin.svg"
import x from "../assets/x.svg"
import { useNavigate } from "react-router-dom"
// import enterButton from "../assets/enterButton.svg"

const Footer = () => {

    const navigate = useNavigate();

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
        <div className="w-[100%] bg-[#3C0B04] py-[3%] flex flex-col gap-[30px]">
            <div className="w-[90%] mx-auto  flex justify-between text-white px-[1%]">
                <div className="flex flex-col gap-[10px] w-[40%]">
                    <div className="text-[24px] font-[800]">
                        <img src={monarque} alt="" className="w-1/3"/>
                    </div>

                    <div className="text-[16px] font-[400]">
                        <table>
                            <tr>
                                <td className=""><img src={phone} alt="" /></td>
                                <td className="px-2">+91 8800207169</td>
                            </tr>

                            <tr>
                                <td className=""><img src={message} alt="" /></td>
                                <td className="px-2">abhinavkapoor221@gmail.com</td>
                            </tr>
                        </table>
                    </div>

                    <div className="flex gap-[15px]">

                        <a href="https://www.linkedin.com/in/mymonarque/" target="_blank"><img src={linkedin} alt="" className="cursor-pointer" /></a>
                        <a href="https://www.instagram.com/mymonarque/" target="_blank"><img src={insta} alt="" className="cursor-pointer" /></a>
                        <a href="https://x.com/mymonarque/" target="_blank"><img src={x} alt="" className="cursor-pointer" /></a>
                        
                    </div>
                </div>

                <div className="flex flex-col gap-[10px] w-[20%]">
                    <div className="text-[16px] font-[600]">
                        QUICK LINKS
                    </div>

                    <div className="text-[16px] font-[500]">
                        <ul>
                            <li className="cursor-pointer" onClick={() => scrollToSection("navbar")}>Home</li>
                            {/* <li className="cursor-pointer font-[300]">About Us</li> */}
                            <li className="cursor-pointer font-[300]" onClick={() => {scrollToSection("navbar");
                            setTimeout(() => {
                                navigate("/products");
                              }, 1);
                            }}>Products</li>
                            <li className="cursor-pointer font-[300]" onClick={() => scrollToSection("team")}>Our Team</li>
                            <li className="cursor-pointer font-[300]" onClick={() => scrollToSection("contact")}>Contact Us</li>
                            
                        </ul>
                    </div>
                </div>

                {/* <div className="w-[25%] flex flex-col gap-[15px]">
                    <div className="text-[16px] font-[600]">
                    Newsletter
                    </div>

                    <div className="text-[16px] font-[400]">
                    A short sentence describing what someone will receive
                    by subscribing
                    </div>

                    <div className="relative text-black">
                        <input type="email" name="" id="" placeholder="Enter your Email" className="bg-white w-[100%] h-[50px] rounded-4xl text-black px-[4%]" />

                        <div className="absolute top-[6%] right-[1%] cursor-pointer">
                            <img src={enterButton} alt="" />
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="w-[90%] mx-auto  py-[1%] flex flex-col gap-[5px]">
                <div className="w-[100%] bg-white h-[1px] "></div>

                <div className="flex justify-between items-center text-[14px] font-[400] text-white">
                    <div className="w-fit">
                    © 2025 MONARQUE | All Rights Reserved
                    </div>

                    {/* <div className="w-fit">
                    Developed By FFF.
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Footer