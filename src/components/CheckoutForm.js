import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
//Components
import BrandButton from "../components/styles/BrandButton.styled";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

const CheckoutForm = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { checkout } = useContext(ProductContext);
  const [orderDetails, setOrderDetails] = useState({
    cart,
    total,
    address: null,
    token: null,
  });
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const history = useNavigate();

  useEffect(() => {
    if (orderDetails.token) {
      checkout(orderDetails);
    }
  }, [orderDetails]);

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();
    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Send the token to your server.
      const token = result.token;
      setOrderDetails({ ...orderDetails, token: token.id });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Shipping Address</label>
        <input
          id="checkout-address"
          type="text"
          size="50"
          onChange={(e) =>
            setOrderDetails({ ...orderDetails, address: e.target.value })
          }
        />
        <div>
          <label> Credit or debit card </label>
          <CardElement
            id="stripe-element"
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleChange}
          />
        </div>
        <div role="alert">{error}</div>
      </div>

      <BrandButton primary type="submit">
        Submit Payment
      </BrandButton>
    </form>
  );
};

export default CheckoutForm;
