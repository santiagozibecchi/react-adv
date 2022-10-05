import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
   className?: string;
}

export const ProductButtons = ({ className }: Props) => {
   const { increaseBy, counter } = useContext(ProductContext);

   return (
      <div className={`${styles.buttonsContainer} ${className}`}>
         <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
            -
         </button>
         <div className={styles.countLabel}>{counter}</div>
         <div onClick={() => increaseBy(+1)} className={styles.buttonAdd}>
            +
         </div>
      </div>
   );
};
