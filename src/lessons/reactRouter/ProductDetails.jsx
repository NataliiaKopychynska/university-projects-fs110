import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  return <div>ProductDetails : {productId}</div>;
}

export default ProductDetails;
