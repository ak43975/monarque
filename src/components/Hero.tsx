// // import heroImg from "../assets/heroMonarque2.svg"
// const Hero = ()=>{
//     return (
//         <div className="w-[100%]">
//             <div className="w-full h-[700px]  bg-[url('/assets/heroMonarque2.svg')] bg-cover relative">

//                 <div className=" text-white absolute  w-[100%] text-center flex flex-col gap-[20px] top-[69%]">
//                         <div className=" text-[32px] font-[500]">INTRODUCING MONARQUE PERFUMES</div>
//                         <div className=" text-[16px] font-[500]">A profoundly resonant new Exceptional Extrait</div>
//                         <div>
//                             <button className="text-[16px] font-[500] text-black bg-white px-[1%] py-[0.5%] cursor-pointer">SHOP NOW</button>
//                         </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Hero


const Hero = (props: { id: string }) => {
    return (
        <div {...props} className="w-full h-[100vh] relative overflow-hidden">
            <div className="w-full h-full bg-[url('/assets/herosection3.png')] bg-cover bg-center bg-fixed">
                <div className="text-white absolute w-full text-center flex flex-col gap-5 top-[90%]">
                    {/* <div className="text-[32px] font-[500]">INTRODUCING MONARQUE PERFUMES</div>
                    <div className="text-[16px] font-[500]">A profoundly resonant new Exceptional Extrait</div>
                    <div>
                        <button className="text-[16px] font-[500] text-black bg-white px-4 py-2 cursor-pointer">SHOP NOW</button>
                    </div> */}
                </div>
            </div>

            
        </div>
    );
};

export default Hero;