import reflection from "../assets/REFLECTION-100-ML.jpg.svg"
import guidance from "../assets/GUIDANCE-WOMAN-100-ML_178c631a-eaa5-4599-bce9-cb53a53486af.jpg.svg"
import secretGarden from "../assets/Amouage_SecretGarden_CommercialShot_LoveDelight_Bottle_990x941px_0679e2f4-4fac-469d-a5aa-cda150dd2182.jpg.svg"
import outlands from "../assets/outlands_updated1.jpg 1.svg"

const HomeProducts = ()=>{
    const data = [{
        image : reflection,
        title: "REFLECTION MAN",
        price: 395
    },{
        image : guidance,
        title: "GUIDANCE",
        price: 395
    },{
        image : secretGarden,
        title: "NEW | LOVE DELIGHT",
        price: 395
    },{
        image : outlands,
        title: "NEW | OUTLANDS",
        price: 475
    },]
    return(
        <div>
            <div className="py-[2.9%] text-[32px] font-[500] text-center">
                PRECIOUS, POTENT, PERSONAL
            </div>

            <div className="flex ">
                {
                    data.map((item)=>(
                        <div className="relative border border-black/50">
                            <img src={item.image} alt="" />

                            <div className="absolute top-[85%] w-[100%] flex flex-col items-center gap-[10px]">
                                <div className="text-[18px] font-[500]">
                                    {item.title}
                                </div>

                                <div className="text-[15px] font-[500]">
                                    ${item.price}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeProducts