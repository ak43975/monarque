// import product2 from "../assets/product2_page-0001.jpg";
// import product4 from "../assets/product4_page-0001.jpg";

// const HomeProducts = ()=>{
//     const data = [{
//         image : product4,
//         title: "REFLECTION MAN",
//         price: 395
//     },{
//         image : product2,
//         title: "GUIDANCE",
//         price: 395
//     },{
//         image : product4,
//         title: "NEW | LOVE DELIGHT",
//         price: 395
//     },{
//         image : product2,
//         title: "NEW | OUTLANDS",
//         price: 475
//     },]
//     return(
//         <div>
//             <div className="py-[2.9%] text-[32px] font-[500] text-center">
//                 PRECIOUS, POTENT, PERSONAL
//             </div>

//             <div className="flex ">
//                 {
//                     data.map((item)=>(
//                         <div className="relative border border-black/50">
//                             <img src={item.image} alt="" />

//                             <div className="absolute top-[85%] w-[100%] flex flex-col items-center gap-[10px]">
//                                 <div className="text-[18px] font-[500]">
//                                     {item.title}
//                                 </div>

//                                 <div className="text-[15px] font-[500]">
//                                     ${item.price}
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }

// export default HomeProducts



import product2 from "../assets/product2_page-0001.jpg";
import product4 from "../assets/product4_page-0001.jpg";

const HomeProducts = () => {
    const data = [
        {
            image: product4,
            title: "Oud Eclipse",
            originalPrice: 999,
            discountedPrice: 699
        },
        {
            image: product2,
            title: "Cedar Bloom",
            originalPrice: 999,
            discountedPrice: 699
        },
        {
            image: product4,
            title: "Ocean Noir",
            originalPrice: 999,
            discountedPrice: 699
        },
        {
            image: product2,
            title: "Pistachio Caramel",
            originalPrice: 999,
            discountedPrice: 699
        },
    ];
    return (
        <div>
            <div className="py-[2.9%] text-[32px] font-[500] text-center">
                PRECIOUS, POTENT, PERSONAL
            </div>

            <div className="flex">
                {data.map((item, index) => (
                    <div key={index} className="relative border border-black/50 overflow-hidden">
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