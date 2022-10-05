import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
   img?: string;
   className?: string;
}

export const ProductImage = ({ img = "", className }: Props) => {
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
   return (
      <img
         className={`${styles.productImg} ${className}`}
         src={imgToShow}
         alt="Product"
      />
   );
};
