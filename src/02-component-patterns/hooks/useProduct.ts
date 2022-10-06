import { useState, useEffect } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductsArgs {
   product: Product;
   onChange?: (args: onChangeArgs) => void;
   value?: number;
}

export const useProduct = ({
   onChange,
   product,
   value = 0 /* Si no viene el value, establesco este valor por defecto */,
}: useProductsArgs) => {
   const [counter, setCounter] = useState(value);

   const increaseBy = (value: number) => {
      // ultimo valor
      const newValue = Math.max(counter + value, 0);

      setCounter(newValue);
      // cuando el counter cambia se ejecuta el onChange
      // Si onChange tiene un valor se ejecuta, caso contrario la ignora
      // Emito la funcion con las propiedades que voy a necesitar en el lugar que la este invocando (desde el padre)
      onChange && onChange({ product, count: newValue });
   };

   // Pendiente del valor para actualizarlo al valor que recibe
   // Para setear el nuevo valor del counter en la tarjeta del carrito de compras
   useEffect(() => {
      setCounter(value);
   }, [value]);

   return {
      counter,
      increaseBy,
   };
};
