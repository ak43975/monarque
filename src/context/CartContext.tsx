import { createContext, useState, ReactNode } from "react";
import product2 from "../assets/product2_page-0001.jpg";
import product4 from "../assets/product4_page-0001.jpg";

// Define the type for the context
export interface Product{
  image : string,
  title : string,
  description : string,
  Originalprice : number,
  DiscountedPrice : number,
  DiscountPerc : number
}

export type CartItem = Product & { quantity: number };

const DummyData : Product[] = [
  {
    image : product2,
    title : "Oud Eclipse",
    description : "Indulge in a luxurious blend of white chocolate, saffron, and oud, creating a captivating balance of warmth, spice, and depth. The rich notes of neroli and black pepper add a touch of vibrance, while leatherwood and patchouli leave a lasting impression. Crafted for those who appreciate sophistication, this fragrance embodies timeless elegance and modern charm. Élégance et raffinement à la française.",
    Originalprice : 999,
    DiscountedPrice : 699,
    DiscountPerc : 30
  },
  {
    image : product2,
    title : "Cedar Bloom",
    description : "Cedar Bloom is an enchanting fusion of palisander rosewood, cinnamon, and Bulgarian rose, layered with the warmth of oud, vanilla, and musk. The deep woody and floral notes create a luxurious fragrance that lingers beautifully. Designed for those who seek elegance with a touch of mystery, it embodies timeless sophistication. A scent that captivates the senses and leaves an unforgettable impression. Un parfum envoûtant, d’une élégance exquise.",
    Originalprice : 999,
    DiscountedPrice : 699,
    DiscountPerc : 30
  },
  {
    image : product2,
    title : "Ocean Noir",
    description : "Ocean Noir is a captivating blend of fresh citrus, soothing lavender, and warm sandalwood, evoking a sense of depth and mystery. The rich fusion of spices and woody undertones creates a timeless fragrance that lingers elegantly. Designed for those who seek sophistication and a bold statement in every spray. Experience the perfect balance of freshness and warmth. Un parfum raffiné, inspiré par l’élégance française",
    Originalprice : 999,
    DiscountedPrice : 699,
    DiscountPerc : 30
  },
  {
    image : product4,
    title : "Pistachio Caramel",
    description : "Pistachio Caramel is a delectable fusion of roasted pistachio, hazelnut, and almond, enriched with sweet rum and cardamom. A heart of floral jasmine and juicy raspberry adds a delicate balance, while caramel, vanilla, and cacao create an indulgent, creamy warmth. The lingering notes of sandalwood and tonka bean wrap the fragrance in sophistication and allure. A scent that is both playful and luxurious. Un délice gourmand, infiniment élégant.",
    Originalprice : 999,
    DiscountedPrice : 699,
    DiscountPerc : 30
  }
]

interface CartContextType {
  prodImg: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateQuantity: (product: Product, quantity: number) => void;
  // addProduct: (newProduct: Product) => void;
}

// Create the context with a proper default value
export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProvider = {
  children : ReactNode
}

export default function CartProvider({ children }: CartProvider){
  const [prodImg, setProdImg] = useState<Product[]>(DummyData);
  setProdImg(DummyData)
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add products to the cart
  const addToCart = (product: Product) => {
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
      prevCart.map((item) =>
        item.title === product.title ? { ...item, quantity } : item
      )
    );
  };

  // const addProduct = (newProduct: string) => {
  //   setProdImg((prev) => [...prev, newProduct]);
  // };

  return (
    <CartContext.Provider value={{ prodImg, cart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
