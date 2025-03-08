import premium from "../assets/premium.svg"
// import crueltyFree from "../assets/crueltyFree.svg"
import longLasting from "../assets/longlasting3.svg"
import spray from "../assets/spray2.svg"
import clinicallyProven from "../assets/clinicallyProven.svg"

const WhyTrust = () => {
    const data = [
        {
            image: premium,
            title: "30 % Exceptional Oil Concentration"
        },
        {
            image: longLasting,
            title: "More than 48 Hours Long Lasting Fragnance"
        },
        {
            image: spray,
            title: "Grass France, Sourced from Perfume Capital of the world"
        },
        {
            image: clinicallyProven,
            title: "Unique,Innovative, Niche - New Age, Trendy , Adaptive formulation"
        }
    ]
    return (
        <div className="w-[100%] bg-[#310C07] text-white py-[1%] flex flex-col gap-[35px]">
            <div className="text-center w-[100%] text-[38px] font-[400]">
                Why Trust Us?
            </div>

            <div className="w-[80%] flex justify-center gap-[7.5%] text-[15px] font-[500] mx-auto">
                {
                    data.map((item) => (
                        <div className="flex flex-col justify-center items-center gap-[10px] w-[25%]">
                            <img src={item.image} alt="" className="" />
                            <div className="w-[115%] mx-auto text-center break-words whitespace-normal leading-tight">
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