import {
   ProductButtons,
   ProductCard,
   ProductImage,
   ProductTitle,
} from "../components";

import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
   const { onProductCountChange, shoppingCard } = useShoppingCart();

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
                  // Primero accedo al key del objeto mediando la propiedad computada/ dinamica, si existe porque puede ser undefined, sino retornar el valor inicial de cero {1: {…}}
                  value={shoppingCard[product.id]?.count || 0}
               >
                  <ProductImage className="custom-image" />
                  <ProductTitle className="text-white" />
                  <ProductButtons
                     className="custom-buttons"
                     style={{
                        display: "flex",
                        justifyContent: "center", 
                     }}
                  />
               </ProductCard>
            ))}
         </div>

         <div className="shopping-cart">
            {Object.values(shoppingCard).map((product) => (
               <ProductCard
                  key={product.id}
                  className="bg-dark text-bold"
                  product={product}
                  style={{
                     width: "100px",
                  }}
                  value={product.count}
                  onChange={onProductCountChange}
               >
                  <ProductImage className="custom-image" />
                  <ProductButtons className="custom-buttons" />
               </ProductCard>
            ))}
         </div>
      </div>
   );
};

// setShoppingCard anterior - Forma mas sencilla
/*if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldShoppingCardState;
            console.log(product);

            return {
               ...rest,
            };
         }

         return {
            ...oldShoppingCardState,
            [product.id]: { ...product, count },
         };
      }*/
