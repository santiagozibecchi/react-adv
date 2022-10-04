import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export { ProductButtons } from "./ProductButtons";
export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";

// Object.assign: para agregar/asignarle nuevas propiedades a un objeto ProductCardHOC. En JS todo es un objeto menos los primitivos

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
   Title: ProductTitle,
   Image: ProductImage,
   Buttons: ProductButtons,
});

export default ProductCard;
