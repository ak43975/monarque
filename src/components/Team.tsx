import { useState, useEffect } from "react";
import perfumeLeft from "../assets/perfumeLeft.svg"
import perfumeRight from "../assets/perfumeRight.svg"
import abhinav from "../assets/Abhinav Kapoor_page-0001 (1).jpg"
import muskan from "../assets/MuskaanTeamMate_page-0001.jpg"
import sarthak from "../assets/SarthakTeamMate_page-0001.jpg"
import sanidhya from "../assets/person3.jpg"
import shristi from "../assets/SrishtiMonarque_page-0001.jpg"

const Team = (props: { id: string }) => {
    const images = [
        abhinav, muskan, sarthak, sanidhya, shristi
    ]
    const captions = [
        "Abhinav Kapoor",
        "Muskaan Gangwal",
        "Sarthak Khanna",
        "Sanidhya Sinha",
        "Srishti Kataria"
    ];


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        console.log("images", images.length)
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

        }, 3000);

        return () => clearInterval(interval);
    }, []);

    console.log(currentIndex)

    return (
        <div {...props} className="relative w-[100%] py-[9%]">
            <div className="flex justify-between items-center w-[85%] mx-auto ">
                <div className="flex flex-col gap-[15px] w-[57%] h-fit text-[#282828] tracking-normal" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <div className="text-[48px] font-[400]">
                        Meet The Team
                    </div>

                    <div className="text-[20px] font-[700]">
                        Our team, the visionary force behind luxury perfumery, is redefining elegance—one scent at a time.
                    </div>

                    <div className="text-[20px] font-[400]">
                        With a shared passion for fragrances, we blend tradition with innovation, crafting perfumes that are more than just scents—they're immersive experiences. Our meticulous attention to detail and unwavering commitment to quality have set a new standard in the industry, offering a range of attars and perfumes that embody sophistication and exclusivity.
                    </div>

                    <div className="text-[20px] font-[400]">
                        For us, fragrance isn’t just about smell; it’s about identity, emotion, and timeless luxury. Through our creations, we invite you to indulge in the art of perfumery like never before. Step into our world—where every scent tells a story.
                    </div>
                </div>

                <div className="w-[34%] h-[700px]  relative">

                    <div className="w-[100%] h-[90%] border-4 border-[#310C07] rounded-[9%] overflow-hidden relative ">

                        

                        {/* Image Wrapper (For Sliding Effect) */}
                        <div
                            className="relative flex w-full h-full transition-transform duration-500 ease-in-out "
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {images.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Slide ${index}`}
                                    className="w-full h-full object-cover shrink-0  "
                                />
                            ))}

                        </div>
                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

                    </div>

                    



                    <div className="absolute top-[92%] left-1/2 transform -translate-x-1/2 flex space-x-2 ">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 border h-2 rounded-full ${currentIndex === index ? "bg-[#310C07]" : "bg-white"}`}
                            />
                        ))}
                    </div>

                    <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 text-white text-lg font-bold z-10">
                        {captions[currentIndex]}
                    </div>


                </div>
            </div>

            <img src={perfumeLeft} alt="" className="absolute bottom-0" />
            <img src={perfumeRight} alt="" className="absolute bottom-0 right-0" />
        </div>
    )
}

export default Team