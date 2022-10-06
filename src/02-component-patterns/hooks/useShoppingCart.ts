import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
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

   return {
      shoppingCard,
      onProductCountChange,
   };
};
