import React from "react";
import { useCart } from "react-use-cart";
import "./cart.scss";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    items,
    isEmpty,
    totalItems,
    totalUniqueItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const navigate = useNavigate();
  const handleNavigation = (path, hash) => {
    navigate(path); // Navigate to the home page
    setTimeout(() => {
      const element = document.getElementById(hash); // Scroll to the desired section
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure the navigation occurs before scrolling
  };

  if (isEmpty)
    return (
      <div className="empty-cart container">
        <h1 className="text-center">Your Cart is empty.</h1>
        <button
          className="btn btn-info"
          onClick={() => handleNavigation("/", "menu")}
        >
          Order Now
        </button>
      </div>
    );

  return (
    <section className="cart py-4">
      <div className="main">
        <h3 className="text-center text-decoration-underline">View Cart</h3>
        <h6>
          Cart: ({totalUniqueItems}) total items: ({totalItems})
        </h6>
        {items.map((item, index) => (
          <div key={index} className="cart-item">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="item-image"
              loading="lazy"
            />
            <div className="item-details">
              <h5>{item.name}</h5>
              <p>{item.description}</p>
              <strong>
                ${Number(item.price).toFixed(2)}{" "}
                <p>Quantity: {item.quantity}</p>
              </strong>
            </div>
            <div className="item-actions">
              <button
                className="btn btn-warning"
                onClick={() => {
                  updateItemQuantity(item.id, item.quantity - 1);
                }}
              >
                -
              </button>
              <button
                className="btn btn-success"
                onClick={() => {
                  updateItemQuantity(item.id, item.quantity + 1);
                }}
              >
                +
              </button>
              <button
                className="btn btn-danger"
                onClick={() => removeItem(item.id)}
              >
                Remove Item
              </button>
            </div>
          </div>
        ))}

        <div className="total-price col-auto ms-auto">
          <h2>Total Price: ${cartTotal.toFixed(2)}</h2>
        </div>
        <div className="action-buttons col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button
            className="btn pay-btn btn-success ms-auto"
            onClick={() => handleNavigation("/order", "payOrder")}
          >
            Proceed to Pay
          </button>
        </div>
        <div className="promos container mt-3">
          <i>If you have promo code or voucher card enter it here</i>
          <form action="#" method="post">
            <input
              type="text"
              className="form-control"
              name="promo"
              id="promo"
              placeholder="Enter voucher or promo code"
            />
            <button type="submit" className="btn btn-dark mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Cart;
