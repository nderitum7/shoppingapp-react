
import React from "react";

function Cart({ cartItems }) {
  return (
    <section className="cart">
      <h2>Shopping Cart ({cartItems.length})</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ol>
          {cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              {item.name} is in your cart.
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default Cart;
