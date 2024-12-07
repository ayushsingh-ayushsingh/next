import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
        facere, expedita illum, repellendus placeat sint dicta, optio magni
        consectetur ea itaque at tempora nostrum voluptas.
      </p>
      <div className="text-center">
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductCard;
