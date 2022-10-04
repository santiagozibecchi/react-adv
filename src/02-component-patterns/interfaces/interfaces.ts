import { ReactElement } from "react";

export interface ProductCardProps {
   product: Product;
   children?: ReactElement | ReactElement[];
}

export interface Product {
   id: string;
   title: string;
   img?: string;
}

export interface ProductContextProps {
   increaseBy: (value: number) => void;
   counter: number;
   product: Product;
}

export interface ProductCardHOCProps {
   ({ children, product }: ProductCardProps): JSX.Element;
   Title: ({ title }: { title?: string }) => JSX.Element;
   Image: ({ img }: { img?: string }) => JSX.Element;
   Buttons: () => JSX.Element;
}
