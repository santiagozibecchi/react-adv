import { FC, PropsWithChildren, ReactElement } from "react";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import { useProduct } from "../hooks/useProduct";

interface Props {
   product: Product;
   children?: ReactElement | ReactElement[];
}

interface Product {
   id: string;
   title: string;
   img?: string;
}

export const ProductImage = ({ img = "" }) => {
   // Para un ternario, un string vacio es considerado como false
   return (
      <img
         className={styles.productImg}
         src={img ? img : noImage}
         alt="Product"
      />
   );
};

export const ProductTitle = ({ title }: { title: string }) => {
   return <span className={styles.productDescription}>{title}</span>;
};

interface ProductButtonProps {
   increaseBy: (value: number) => void;
   counter: number;
}

export const ProductButton = ({ increaseBy, counter }: ProductButtonProps) => {
   return (
      <div className={styles.buttonsContainer}>
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

export const ProductCard = ({ children, product }: Props) => {
   const { counter, increaseBy } = useProduct();

   return (
      <div className={styles.productCard}>
         {children}

      </div>
   );
};
