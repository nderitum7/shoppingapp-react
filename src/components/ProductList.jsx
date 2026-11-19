
import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  return (
    <section className="product-list">
      <h2>Available Products</h2>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {products.length === 0 && (
        <p>No products found in this category.</p>
      )}
    </section>
  );
}

export default ProductList;
