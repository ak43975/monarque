import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import right from "../assets/Size3.svg"

interface ProductsCardProps {
  imageLink: string;
  title: string;
  desc: string;
  Originalprice: number;
  DiscountedPrice: number;
  DiscountPerc: number;
  ml:number
}

const ProductsCard: React.FC<ProductsCardProps> = ({
  imageLink,
  title,
  Originalprice,
  DiscountedPrice,
  DiscountPerc,
  ml
}) => {

  const cartContext = useContext(CartContext);
  const navigate = useNavigate()

  if (!cartContext) {
    return null; // Handle case where context is undefined
  }

  return (

    <div className="w-[23%] my-[3%]" onClick={() => navigate(`/product/${title}`)}>
      <img src={imageLink} alt="" className="w-[100%] rounded-xl" />

      <div className="mt-[4%]">
        {/* title */}
        <h2 className="text-xl font-semibold">{title}</h2>
        
        <p className="text-md" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          <span className="line-through text-gray-500">₹{Originalprice}</span>{" "}
          <span className=" font-bold ">
            <span>₹{DiscountedPrice}</span>
            <span className="text-red-500  mx-[1%]">{`(${DiscountPerc}% off)`}</span>
          </span>
        </p>
        
        <div className="text-md font-semibold text-gray-600 mt-[2%]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{ml}ml</div>
      </div>

      <div>
        {/* <button

          className={`w-[100%] text-[20px] py-[2%] rounded-md mt-[10%] cursor-pointer transition-all duration-200 bg-[#3C0B04] text-white hover:scale-[99%] flex justify-between items-center px-[5%]`}>
            <span>See Product</span>
            <span>
              <img src={right} alt="" />
            </span>
        </button> */}
      </div>
    </div>

  )
}

export default ProductsCard