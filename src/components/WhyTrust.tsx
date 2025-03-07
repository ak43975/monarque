import premium from "../assets/premium.svg"
import crueltyFree from "../assets/crueltyFree.svg"
import longLasting from "../assets/longLasting.svg"
import clinicallyProven from "../assets/clinicallyProven.svg"

const WhyTrust = ()=>{
    const data = [
        {
            image : premium,
            title : "Premium Quality"
        },
        {
            image : crueltyFree,
            title : "Cruelty Free"
        },
        {
            image : longLasting,
            title : "Long Lasting"
        },
        {
            image : clinicallyProven,
            title : "Clinically Proven"
        }
    ]
    return(
        <div className="w-[100%] bg-[#310C07] text-white py-[1%] flex flex-col gap-[35px]">
            <div className="text-center w-[100%] text-[38px] font-[400]">
                Why Trust Us?
            </div>

            <div className="w-[60%] flex justify-center gap-[10%] text-[16px] font-[600] mx-auto ">
                {
                    data.map((item)=>(
                        <div className="">
                            <img src={item.image} alt="" />
                            <div className="w-[50%] mx-auto text-center">
                                {item.title}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhyTrust