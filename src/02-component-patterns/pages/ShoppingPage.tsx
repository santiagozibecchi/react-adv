import {
   ProductButton,
   ProductCard,
   ProductImage,
   ProductTitle,
} from "../components/ProductCard";

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
               <ProductImage />
               <ProductTitle />
               <ProductButton />
            </ProductCard>
         </div>
      </div>
   );
};