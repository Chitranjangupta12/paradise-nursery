import React, { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      {!showProductList ? (
        <>
          <h1>Paradise Nursery</h1>
          <button onClick={() => setShowProductList(true)}>
            Get Started
          </button>
        </>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
