import React from "react";
import "./product.css";

function Products({ result }) {
  return (
    <div className="card-container">
      {result}
    </div>
  );
}

export default Products;
