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

            <div className="w-full h-[550px] bg-[url('/assets/heroSection2Img.svg')]  bg-contain bg-no-repeat">

            </div>
        </div>
    )
}

export default HomeSection2