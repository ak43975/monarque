import { createContext, useState, ReactNode } from "react";
import product1 from "../assets/Oud_page-0001.jpg"
import product2 from "../assets/product2_page-0001.jpg";
import product3 from "../assets/OceanNoirSKU_page-0001.jpg"
import product4 from "../assets/product4_page-0001.jpg";

// Define the type for the context
interface Review{
  authorName : string 
  description : string 
  rating : number
}
export interface Product{
  image : string,
  title : string,
  shortDesc: string,
  description : string,
  Originalprice : number,
  DiscountedPrice : number,
  DiscountPerc : number,
  reviews : Review[],
  ml : number
}

export type CartItem = Product & { quantity: number };

const DummyData : Product[] = [
  {
    image : product1,
    title : "Oud Eclipse",
    shortDesc : "Indulge in a luxurious blend of white chocolate, saffron, and oud, exuding elegance and warmth with a subtle French allure. Élégance et raffinement.",
    description : "Indulge in a luxurious blend of white chocolate, saffron, and oud, creating a captivating balance of warmth, spice, and depth. The rich notes of neroli and black pepper add a touch of vibrance, while leatherwood and patchouli leave a lasting impression. Crafted for those who appreciate sophistication, this fragrance embodies timeless elegance and modern charm. Élégance et raffinement à la française.",
    Originalprice : 999,
    DiscountedPrice : 699,
    DiscountPerc : 30,
    reviews: [
      { authorName: "Rajesh K.", description: "Oud Eclipse is pure sophistication in a bottle! The deep, smoky oud mixed with warm spices lasts all day, making me feel confident and luxurious.", rating: 5 },
      { authorName: "Priya S.", description: "This fragrance is a masterpiece—rich, intense, and captivating. Every time I wear it, I get compliments on how elegant and unique it smells.", rating: 5 },
      { authorName: "Rishabh D.", description: "If luxury had a scent, this would be it! The perfect balance of woody oud and subtle sweetness creates an aura of mystery and power.", rating: 5 }
    ],
    ml:15
  },
  {
    image : product2,
    title : "Cedar Bloom",
    shortDesc : "Ocean Noir embodies the essence of freshness with citrus, lavender, and sandalwood, creating an invigorating yet deep scent. Un parfum sophistiqué, inspiré par l’élégance française.",
    description : "Cedar Bloom is an enchanting fusion of palisander rosewood, cinnamon, and Bulgarian rose, layered with the warmth of oud, vanilla, and musk. The deep woody and floral notes create a luxurious fragrance that lingers beautifully. Designed for those who seek elegance with a touch of mystery, it embodies timeless sophistication. A scent that captivates the senses and leaves an unforgettable impression. Un parfum envoûtant, d’une élégance exquise.",
    Originalprice : 999,
    DiscountedPrice : 699,
    DiscountPerc : 30,
    reviews: [
      { authorName: "Rajan Verma", description: "Cedar Bloom feels like a walk through a sunlit forest. The crisp cedarwood and earthy undertones create a refreshing yet warm scent that lasts for hours.", rating: 5 },
      { authorName: "Rahul Pandey", description: "This fragrance has an incredible balance of freshness and depth. The cedarwood note is rich and grounding, making it my go-to scent for any occasion.", rating: 5 },
      { authorName: "Sanat K. Mishra", description: "Monarque has outdone itself with Cedar Bloom. It’s fresh, elegant, and makes me feel connected to nature while exuding sophistication.", rating: 5 }
    ],
    ml:15
  },
  {
    image : product3,
    title : "Ocean Noir",
    shortDesc : "Cedar Bloom blends rich rosewood, cinnamon, and oud with warm vanilla and musk, evoking timeless sophistication. Un parfum envoûtant, d’une élégance exquise.",
    description : "Ocean Noir is a captivating blend of fresh citrus, soothing lavender, and warm sandalwood, evoking a sense of depth and mystery. The rich fusion of spices and woody undertones creates a timeless fragrance that lingers elegantly. Designed for those who seek sophistication and a bold statement in every spray. Experience the perfect balance of freshness and warmth. Un parfum raffiné, inspiré par l’élégance française",
    Originalprice : 999,
    DiscountedPrice : 699,
    DiscountPerc : 30,
    reviews: [
      { authorName: "Julia J.", description: "Ocean Noir is the perfect blend of freshness and mystery. The marine notes mixed with deep amber make it irresistible—like a night by the ocean.", rating: 5 },
      { authorName: "Narendra M.", description: "This scent is magnetic! It starts fresh and aquatic but develops into something rich and sensual. A true signature fragrance.", rating: 5 },
      { authorName: "Mohd. Umar", description: "Every time I wear Ocean Noir, I feel unstoppable. The scent is deep yet fresh, making it perfect for both daytime confidence and evening allure.", rating: 5 }
    ],
    ml:15
  },
  {
    image : product4,
    title : "Pistachio Caramel",
    shortDesc : "Pistachio Caramel blends rich nuts, sweet rum, and vanilla with creamy cacao and sandalwood for an irresistible aroma. Un délice gourmand, infiniment élégant.",
    description : "Pistachio Caramel is a delectable fusion of roasted pistachio, hazelnut, and almond, enriched with sweet rum and cardamom. A heart of floral jasmine and juicy raspberry adds a delicate balance, while caramel, vanilla, and cacao create an indulgent, creamy warmth. The lingering notes of sandalwood and tonka bean wrap the fragrance in sophistication and allure. A scent that is both playful and luxurious. Un délice gourmand, infiniment élégant.",
    Originalprice : 999,
    DiscountedPrice : 699,
    DiscountPerc : 30,
    reviews: [
      { authorName: "Emily C.", description: "Absolutely delicious! Pistachio Caramel is like wearing a warm, creamy dessert. The nutty sweetness is perfectly balanced—sophisticated yet addictive!", rating: 5 },
      { authorName: "Olivia H.", description: "I can’t get enough of this fragrance. It smells like a luxury patisserie, with hints of roasted pistachios and golden caramel melting together beautifully.", rating: 5 },
      { authorName: "Sophia L.", description: "Sweet but not overpowering—Pistachio Caramel is my new favorite gourmand scent! It’s comforting, unique, and makes me feel like a true indulgence.", rating: 5 }
    ],
    ml:15
  }
];


interface CartContextType {
  prodImg: Product[];
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  updateQuantity: (product: Product, quantity: number) => void;
  setProdImg: React.Dispatch<React.SetStateAction<Product[]>>;
  reset: () => void;
  // addProduct: (newProduct: Product) => void;
}

// Create the context with a proper default value
export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProvider = {
  children : ReactNode
}

export default function CartProvider({ children }: CartProvider){
  const [prodImg, setProdImg] = useState<Product[]>(DummyData);
  //setProdImg(DummyData)
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add products to the cart
  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.title === product.title);
      if (existingItem) {
        return prevCart.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  
  const updateQuantity = (product: Product, quantity: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.title === product.title ? { ...item, quantity: Math.max(quantity, 0) } : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  const reset = () => {
    setCart([]);
  };
  
  

  return (
    <CartContext.Provider value={{ prodImg, cart, addToCart, updateQuantity, setProdImg, reset }}>
      {children}
    </CartContext.Provider>
  );
};
