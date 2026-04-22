import React from "react";

const products = [
  { id: 1, name: "Aloe Vera", price: 10 },
  { id: 2, name: "Snake Plant", price: 15 },
  { id: 3, name: "Peace Lily", price: 20 },
];

function ProductList() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id} style={{ margin: "10px" }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
