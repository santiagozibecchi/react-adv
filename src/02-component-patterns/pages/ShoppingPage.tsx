import {
   ProductButtons,
   ProductCard,
   ProductImage,
   ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

const product = {
   id: "1",
   title: "Coffe Mug",
   img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
   return (
      <div>
         <h1>Shopping Store</h1>
         <hr />
         <div
            style={{
               display: "flex",
               flexDirection: "row",
               flexWrap: "wrap",
            }}
         >
            <ProductCard product={product}>
               <ProductCard.Image />
               <ProductCard.Title />
               <ProductCard.Buttons />
            </ProductCard>

            <ProductCard className="bg-dark" product={product}>
               <ProductImage className="custom-image" />
               <ProductTitle className="text-white text-bold" />
               <ProductButtons />
            </ProductCard>
         </div>
      </div>
   );
};
