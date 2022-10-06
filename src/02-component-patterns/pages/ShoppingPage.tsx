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
   count: number;
}

export const ShoppingPage = () => {
   const [shoppingCard, setShoppingCard] = useState<{
      [key: string]: ProductInCart;
   }>({});

   const onProductCountChange = ({ count, product }: onChangeArgs) => {
      setShoppingCard((oldShoppingCardState) => {
         // Si el product.id existe lo obtengo, caso contrario, si es nulo, creo uno y con el contador inicializado en cero
         const productInCard: ProductInCart = oldShoppingCardState[
            product.id
         ] || { ...product, count: 0 };

         // Cuando existe un articulo y tiene mas de una unidad
         if (Math.max(productInCard.count + count, 0) > 0) {
            productInCard.count += count;
            return {
               ...oldShoppingCardState,
               [product.id]: productInCard,
            };
         }

         // Eliminar un producto, significa que no existe o que la sumatoria es menor que cero
         const { [product.id]: toDelete, ...rest } = oldShoppingCardState;

         return {
            ...rest,
         };
      });
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
