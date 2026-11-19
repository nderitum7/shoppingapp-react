
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    { id: 1, name: "Milk", category: "Dairy", price: 60 },
    { id: 2, name: "Cheese", category: "Dairy", price: 120 },
    { id: 3, name: "Apples", category: "Fruits", price: 80 },
    { id: 4, name: "Bananas", category: "Fruits", price: 50 },
    { id: 5, name: "Bread", category: "Bakery", price: 70 },
    { id: 6, name: "Croissants", category: "Bakery", price: 100 },
    { id: 7, name: "Tomatoes", category: "Vegetables", price: 40 },
    { id: 8, name: "Carrots", category: "Vegetables", price: 45 }
  ];


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };


  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className={darkMode ? "app dark-mode" : "app light-mode"}>
      <header>
        <h1>Fresh Grocery Store</h1>

        <DarkModeToggle
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </header>

      <main>
        <div className="filter-section">
          <label htmlFor="category">Filter by Category:</label>

          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Dairy">Dairy</option>
            <option value="Fruits">Fruits</option>
            <option value="Bakery">Bakery</option>
            <option value="Vegetables">Vegetables</option>
          </select>
        </div>

        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />

        <Cart cartItems={cartItems} />
      </main>
    </div>
  );
}

export default App;
