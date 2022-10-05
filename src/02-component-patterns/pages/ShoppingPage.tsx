import {
   ProductButtons,
   ProductCard,
   ProductImage,
   ProductTitle,
} from "../components";

import "../styles/custom-styles.css";
import { onChangeArgs, Product } from "../interfaces/interfaces";
import { useState } from "react";

const product1 = {
   id: "1",
   title: "Coffe Mug",
   img: "./coffee-mug.png",
};

const product2 = {
   id: "2",
   title: "Coffe Mug - Meme",
   img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCart extends Product {
   count: Number;
}

export const ShoppingPage = () => {
   const [shoppingCard, setShoppingCard] = useState<{
      [key: string]: ProductInCart;
   }>({
      "1": { ...product1, count: 10 },
      "2": { ...product1, count: 1 },
   });

   const onProductCountChange = ({ count, product }: onChangeArgs) => {
      console.log(count);
      console.log(product);
   };

   return (
      <div>
         <h1>Shopping Store</h1>
         <hr />
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               flexWrap: "wrap",
            }}
         >
            {products.map((product) => (
               <ProductCard
                  key={product.id}
                  className="bg-dark text-bold"
                  product={product}
                  onChange={onProductCountChange}
               >
                  <ProductImage className="custom-image" />
                  <ProductTitle className="text-white" />
                  <ProductButtons className="custom-buttons" />
               </ProductCard>
            ))}
         </div>

         <div className="shopping-cart">
            <ProductCard
               className="bg-dark text-bold"
               product={product2}
               style={{
                  width: "100px",
               }}
               // onChange={onProductCountChange}
            >
               <ProductImage className="custom-image" />
               <ProductButtons className="custom-buttons" />
            </ProductCard>
            <ProductCard
               className="bg-dark text-bold"
               product={product1}
               style={{
                  width: "100px",
               }}
            >
               <ProductImage className="custom-image" />
               <ProductButtons className="custom-buttons" />
            </ProductCard>
         </div>
      </div>
   );
};
