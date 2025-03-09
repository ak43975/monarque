import car from "../assets/car.svg"
import returns from "../assets/returns.svg"
import cod from "../assets/cod.svg"

const HomeSection2 = ()=>{

    const data = [{
        image : car,
        content : "Free Shipping"
    },{
        image : returns,
        content : "Easy Returns"
    },{
        image : cod,
        content : "COD Available"
    },{
        image : car,
        content : "Secure Payments"
    }]
    return(
        <div className="w-[100%]">
            <div className="flex justify-center gap-[9%] py-[1%]">
                {
                    data.map((item)=>(
                        <div className="flex items-center gap-[10px]">
                            <div><img src={item.image} alt="" /></div>
                            <div className="text-[16px] font-[600]">{item.content}</div>
                        </div>
                    ))
                }
            </div>

            <div className="w-full h-[550px] flex justify-center items-center overflow-hidden">
                {/* Left Image (section302) with Overlay */}
                <div className="relative w-2/3 h-full overflow-hidden transition-transform duration-500 hover:scale-110">
                    <img
                        src="/assets/section302.png"
                        alt="Section 302"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>

                {/* Right Image (section301) with Overlay */}
                <div className="relative w-1/3 h-full overflow-hidden transition-transform duration-500 hover:scale-110">
                    <img
                        src="/assets/section301.png"
                        alt="Section 301"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
            </div>

        </div>
    )
}

export default HomeSection2