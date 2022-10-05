import { createContext, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import {
   onChangeArgs,
   Product,
   ProductContextProps,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
   children?: ReactElement | ReactElement[];
   className?: string;
   product: Product;
   style?: React.CSSProperties;
   onChange?: (args: onChangeArgs) => void;
}

export const ProductCard = ({
   children,
   product,
   className,
   style,
   onChange,
}: Props) => {
   // objeto que simplemente tenga toda la info que necesito enviarsela al custom hook
   const { counter, increaseBy } = useProduct({ onChange, product });

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
