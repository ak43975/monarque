import { CartContext } from "../context/CartContext";
import { useContext } from "react";

interface ProductsCardProps {
    imageLink: string;
    title: string;
    desc: string;
    Originalprice: number;
    DiscountedPrice: number;
    DiscountPerc: number;
  }

const ProductsCard: React.FC<ProductsCardProps>  = ({
    imageLink,
    title,
    desc,
    Originalprice,
    DiscountedPrice,
    DiscountPerc,
  })=>{

    const cartContext = useContext(CartContext);

    if (!cartContext) {
        return null; // Handle case where context is undefined
      }
    
      const { addToCart } = cartContext;
    
      const handleAddToCart = () => {
        const product = {
          image: imageLink,
          title,
          description: desc,
          Originalprice,
          DiscountedPrice,
          DiscountPerc,
        };
    
        addToCart(product);
      };

    return(
        
            <div className="w-[30%] my-[3%]">
                <img src={imageLink} alt="" className="w-[100%] rounded-t-xl"/>

                <div className="mt-[4%]">
                    {/* title */}
                    <div className="text-[30px] font-[500]">
                        {title}
                    </div>

                    <div className="text-[21px] font-[400]">
                        {/* price */}
                        <div className="flex gap-[5px]">
                            <span className=" line-through">{Originalprice}</span>
                            <span>₹{DiscountedPrice}</span>
                            <span className="text-red-600">{DiscountPerc}% off</span>
                        </div>

                        {/* ml */}
                        <div>
                            100ml
                        </div>
                    </div>
                </div>

                <div>
                    <button 
                    onClick={handleAddToCart}
                    className="bg-[#3C0B04] text-white w-[100%] text-[21px] py-[1%] rounded-md mt-[5%] cursor-pointer">Add to Cart</button>
                </div>
            </div>
        
    )
}

export default ProductsCard