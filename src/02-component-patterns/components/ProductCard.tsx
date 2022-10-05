import { createContext, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import { Product, ProductContextProps } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
   children?: ReactElement | ReactElement[];
   className?: string;
   product: Product;
   style?: React.CSSProperties;
   onChange?: () => void;
}

export const ProductCard = ({ children, product, className, style, onChange }: Props) => {
   const { counter, increaseBy } = useProduct(onChange);

   return (
      <Provider
         value={{
            counter,
            increaseBy,
            product,
         }}
      >
         <div className={`${styles.productCard} ${className}`} style={style}>
            {children}
         </div>
      </Provider>
   );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
