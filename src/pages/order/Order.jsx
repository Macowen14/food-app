import React from "react";
import { useFormik } from "formik";
import "./order.scss";
import { useCart } from "react-use-cart";
import orderValidationSchema from "./orderValidationSchema";

const Order = () => {
  const { totalItems, cartTotal, isEmpty, emptyCart } = useCart();

  const formik = useFormik({
    initialValues: {
      fName: "",
      lName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      payment: "",
      card: "",
    },
    orderValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  if (isEmpty) {
    return <h3>Your cart is empty</h3>;
  }

  return (
    <div className="order row" id="payOrder">
      <form onSubmit={formik.handleSubmit} className="fields row">
        <div className="order-left col-md-6 col-sm-10">
          <h3 className="text-dark">Delivery Information</h3>
          <div className="input-group row">
            <div className="col">
              <input
                required
                type="text"
                name="fName"
                className="form-control"
                placeholder="Enter your first name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.fName}
              />
              {formik.touched.fName && formik.errors.fName ? (
                <span className="text-danger">{formik.errors.fName}</span>
              ) : null}
            </div>
            <div className="col">
              <input
                required
                type="text"
                name="lName"
                className="form-control"
                placeholder="Enter your last name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lName}
              />
              {formik.touched.lName && formik.errors.lName ? (
                <span className="text-danger">{formik.errors.lName}</span>
              ) : null}
            </div>
          </div>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email address"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="text-danger">{formik.errors.email}</span>
          ) : null}

          <input
            required
            type="tel"
            name="phone"
            id="phone"
            className="form-control"
            placeholder="Phone number"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <span className="text-danger">{formik.errors.phone}</span>
          ) : null}

          <select
            name="city"
            id="city"
            className="form-control"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.city}
          >
            <option value="select">Select your city</option>
            <option value="nairobi">Nairobi</option>
            <option value="mombasa">Mombasa</option>
            <option value="kisumu">Kisumu</option>
            <option value="kirinyaga">Kirinyaga</option>
            <option value="kerugoya">Kerugoya</option>
          </select>
          {formik.touched.city && formik.errors.city ? (
            <span className="text-danger">{formik.errors.city}</span>
          ) : null}

          <input
            required
            type="text"
            name="address"
            id="address"
            placeholder="Enter the address for delivery"
            className="form-control"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <span className="text-danger">{formik.errors.address}</span>
          ) : null}

          <div className="row mt-3 checkbox-group">
            <label htmlFor="payment" className="form-label ms-4 me-2">
              Select Payment Method:
            </label>
            <div className="col">
              <input
                required
                type="radio"
                name="payment"
                className="checkbox"
                value="visa"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              Visa
              <input
                required
                type="radio"
                name="payment"
                className="checkbox"
                value="masterCard"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              Master Card
              <input
                required
                type="radio"
                name="payment"
                className="checkbox"
                value="paypal"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              Paypal
              <input
                required
                type="radio"
                name="payment"
                className="checkbox"
                value="mpesa"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              Mpesa
            </div>
          </div>
          {formik.touched.payment && formik.errors.payment ? (
            <span className="text-danger">{formik.errors.payment}</span>
          ) : null}
        </div>
        <div className="order-right col-md-6 col-sm-10">
          <h2>Cart Total</h2>
          <p>
            Total Items in cart: <span className="ms-2">{totalItems}</span>
          </p>
          <p>
            Goods total: <span className="ms-2">{cartTotal}</span>
          </p>
          <p>
            Delivery Fee <span className="ms-2">$ 00.00</span>
          </p>
          <h6>
            Total Fee: <strong className="ms-2">${cartTotal}</strong>
          </h6>

          <input
            required
            type="text"
            name="card"
            className="form-control"
            placeholder="Card number or phone number if Mpesa"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.card}
          />
          {formik.touched.card && formik.errors.card ? (
            <span className="text-danger">{formik.errors.card}</span>
          ) : null}

          <div className="row">
            <button type="submit" className="btn col w-80">
              Submit
            </button>
            <button
              type="button"
              className="btn col btn-cancel"
              onClick={() => {
                confirm("Do you want to empty your cart") && emptyCart();
              }}
            >
              Cancel Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Order;
