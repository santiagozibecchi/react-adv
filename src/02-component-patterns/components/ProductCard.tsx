import {
   FC,
   PropsWithChildren,
   ReactElement,
   useContext,
   createContext,
} from "react";
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
   // Si mando una imagen mediante las props es la img que quiere sobreescribir

   const { product } = useContext(ProductContext);
   let imgToShow: string;

   if (img) {
      imgToShow = img;
   } else if (product.img) {
      imgToShow = product.img;
   } else {
      imgToShow = noImage;
   }

   // Para un ternario, un string vacio es considerado como false
   return <img className={styles.productImg} src={imgToShow} alt="Product" />;
};

export const ProductTitle = ({ title }: { title?: string }) => {
   const { product } = useContext(ProductContext);

   let productTitle: string;

   if (title) {
      productTitle = title;
   } else {
      productTitle = product.title;
   }

   return <span className={styles.productDescription}>{productTitle}</span>;
};

export const ProductButtons = () => {
   const { increaseBy, counter } = useContext(ProductContext);

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

interface ProductContextProps {
   increaseBy: (value: number) => void;
   counter: number;
   product: Product;
}
export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: Props) => {
   const { counter, increaseBy } = useProduct();

   return (
      <Provider
         value={{
            counter,
            increaseBy,
            product,
         }}
      >
         <div className={styles.productCard}>{children}</div>
      </Provider>
   );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
