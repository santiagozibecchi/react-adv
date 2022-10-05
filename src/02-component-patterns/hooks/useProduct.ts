import { useState } from "react";

export const useProduct = (onChange?: () => void) => {
   const [counter, setCounter] = useState(0);

   const increaseBy = (value: number) => {
      setCounter((prev) => Math.max(prev + value, 0));
      // cuando el counter cambia se ejecuta el onChange
      // Si onChange tiene un valor se ejecuta, caso contrario la ignora
      onChange && onChange();
   };

   return {
      counter,
      increaseBy,
   };
};
