import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

export interface Product {
   id: string;
   img?: string;
   title: string;
}

export interface ProductContextProps {
   counter: number;
   increaseBy: (value: number) => void;
   product: Product;
}

export interface ProductCardHOCProps {
   ({ children, product }: ProductCardProps): JSX.Element;
   Buttons: ({ className }: ProductButtonsProps) => JSX.Element;
   Image: ({ img }: ProductImageProps) => JSX.Element;
   Title: ({ title }: ProductTitleProps) => JSX.Element;
}
