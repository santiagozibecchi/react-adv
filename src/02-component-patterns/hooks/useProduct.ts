import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductsArgs {
   product: Product;
   onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({ onChange, product }: useProductsArgs) => {
   const [counter, setCounter] = useState(0);

   const increaseBy = (value: number) => {
      // ultimo valor
      const newValue = Math.max(counter + value, 0);

      setCounter(newValue);
      // cuando el counter cambia se ejecuta el onChange
      // Si onChange tiene un valor se ejecuta, caso contrario la ignora
      // Emito la funcion con las propiedades que voy a necesitar en el lugar que la este invocando (desde el padre)
      onChange && onChange({ product, count: newValue });
   };

   return {
      counter,
      increaseBy,
   };
};
