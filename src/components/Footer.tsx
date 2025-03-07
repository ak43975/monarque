import phone from "../assets/phone.svg"
import message from "../assets/message.svg"
import facebook from "../assets/facebook.svg"
import insta from "../assets/insta.svg"
import yt from "../assets/yt.svg"
import enterButton from "../assets/enterButton.svg"

const Footer = () => {
    return (
        <div className="w-[100%] bg-[#3C0B04] py-[3%] flex flex-col gap-[30px]">
            <div className="w-[90%] mx-auto  flex justify-between text-white px-[1%]">
                <div className="flex flex-col gap-[10px] w-[40%]">
                    <div className="text-[24px] font-[800] underline">
                        PREMIUM PERFUMES
                    </div>

                    <div className="text-[16px] font-[400]">
                        <table>
                            <tr>
                                <td className=""><img src={phone} alt="" /></td>
                                <td className="">+91 8799111110</td>
                            </tr>

                            <tr>
                                <td className=""><img src={message} alt="" /></td>
                                <td className="">info@premiumperfumes.com</td>
                            </tr>
                        </table>
                    </div>

                    <div className="flex gap-[15px]">
                        <img src={facebook} alt="" className="cursor-pointer"/>
                        <img src={insta} alt="" className="cursor-pointer"/>
                        <img src={yt} alt="" className="cursor-pointer"/>
                    </div>
                </div>

                <div className="flex flex-col gap-[10px] w-[20%]">
                    <div className="text-[16px] font-[600]">
                        QUICK LINKS
                    </div>

                    <div className="text-[16px] font-[600]">
                        <ul>
                            <li className="cursor-pointer">Account</li>
                            <li className="cursor-pointer">About Us</li>
                            <li className="cursor-pointer">Contact Us</li>
                            <li className="cursor-pointer">Terms of Service</li>
                            <li className="cursor-pointer">Privacy Policy</li>
                            <li className="cursor-pointer">Return Your Order</li>
                        </ul>
                    </div>
                </div>

                <div className="w-[25%] flex flex-col gap-[15px]">
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
                </div>
            </div>

            <div className="w-[90%] mx-auto  py-[1%] flex flex-col gap-[5px]">
                <div className="w-[100%] bg-white h-[1px] "></div>

                <div className="flex justify-between items-center text-[14px] font-[400] text-white">
                    <div className="w-fit">
                    © 2025 Premium Perfumes | All Right Reserved
                    </div>

                    <div className="w-fit">
                    Developed By FFF.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer