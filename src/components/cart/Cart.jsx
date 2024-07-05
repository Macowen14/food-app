import React from "react";
import { useCart } from "react-use-cart";
import { info } from "sass";

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

  if (isEmpty)
    return (
      <>
        <h1 className="text-center">Your Cart is empty.</h1>

        <a className="btn btn-info" href="/menu">
          Order Now
        </a>
      </>
    );
  return (
    <>
      <section className="cart container py-4">
        <div className="main">
          <h3>View Cart</h3>
          <h6>
            Cart :({totalUniqueItems}) total items: ({totalItems})
          </h6>
          <table className="table table-striped table-hover">
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{ height: "6rem", width: "auto" }}
                    />
                  </td>
                  <td>
                    {item.name}
                    <p>{item.description}</p>
                  </td>
                  <td>{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button
                      className="btn btn-warning me-2"
                      onClick={() => {
                        updateItemQuantity(item.id, item.quantity - 1);
                      }}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-success me-2"
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="col-auto ms-auto">
            <h2>Total Price: ${cartTotal}</h2>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
              Clear Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
