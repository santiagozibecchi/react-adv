import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

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
