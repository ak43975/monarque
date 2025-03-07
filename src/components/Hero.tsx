// import heroImg from "../assets/heroMonarque2.svg"
const Hero = ()=>{
    return (
        <div className="w-[100%]">
            <div className="w-full h-[700px]  bg-[url('/assets/heroMonarque2.svg')] bg-cover relative">
                {/* <img src={heroImg} alt="" className=" w-[90%%]" /> */}

                <div className=" text-white absolute  w-[100%] text-center flex flex-col gap-[20px] top-[69%]">
                        <div className=" text-[32px] font-[500]">INTRODUCING MONARQUE PERFUMES</div>
                        <div className=" text-[16px] font-[500]">A profoundly resonant new Exceptional Extrait</div>
                        <div>
                            <button className="text-[16px] font-[500] text-black bg-white px-[1%] py-[0.5%] cursor-pointer">SHOP NOW</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Hero