import product2 from "../assets/product2_page-0001.jpg";
import product4 from "../assets/product4_page-0001.jpg";
import product1 from "../assets/Oud_page-0001.jpg"
import product3 from "../assets/OceanNoirSKU_page-0001.jpg"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect , useState } from "react";

interface Data{
    image:string
    title:string | undefined
    originalPrice:number 
    discountedPrice:number

}

const HomeProducts = () => {
    
    //let data : Data[] = []
    const navigate = useNavigate()
    const cartContext = useContext(CartContext)
    const [data, setData] = useState<Data[]>([]);
    

    useEffect(() => {
        let initialData: Data[] = [
            {
                image: product1,
                title: "xyz",
                originalPrice: 999,
                discountedPrice: 699,
            },
            {
                image: product2,
                title: "xyz",
                originalPrice: 999,
                discountedPrice: 699,
            },
            {
                image: product3,
                title: "xyz",
                originalPrice: 999,
                discountedPrice: 699,
            },
            {
                image: product4,
                title: "xyz",
                originalPrice: 999,
                discountedPrice: 699,
            },
        ];

        // Ensure `cartContext?.prodImg` is available before using it
        if (cartContext?.prodImg) {
            initialData = initialData.map((item, index) => ({
                ...item,
                title: cartContext.prodImg[index]?.title || item.title, // Use fallback in case of undefined
            }));
        }

        setData(initialData);
    }, [cartContext]);

    return (
        <div>
            <div className="py-[2.9%] text-[32px] font-[500] text-center">
                PRECIOUS, POTENT, PERSONAL
            </div>

            <div className="flex">
                {data.map((item, index) => (
                    <div key={index} className="relative border border-black/50 overflow-hidden cursor-pointer w-[25%]" onClick={() => navigate(`/product/${item.title}`)}>
                        {/* Image */}
                        <img src={item.image} alt="" className="w-full h-full object-cover" />

                        {/* Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                        {/* Text Overlay */}
                        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center text-white">
                            <div className="text-[18px] font-[500]">{item.title}</div>
                            <div className="text-[15px] font-[500]">
                                <span className="line-through ">₹{item.originalPrice}</span>{" "}
                                <span className=" font-bold ">₹{item.discountedPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeProducts;