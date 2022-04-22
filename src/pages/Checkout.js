import React, { useContext } from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { CartContext } from "../context/cart";
import styled from "styled-components";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51KFf1IAb174uvQEmwO8RSbDazThTmDaaRaSjyuinqaazeC8yESf1nCwkk9lqQmjEmEvkOTHfbYGs3pwZSi5B61w300V1ehp0jM"
  );

  const StyledCheckout = styled.section`
    min-height: 100vh;
    align-items: center;
    display: flex;
    justify-content: center;

    h2 {
      color: black;
    }

    .col-6 {
      text-align: center;
    }
  `;

  const { cart } = useContext(CartContext);

  if (!cart.length) {
    return (
      <AmplifyAuthenticator>
        <h1>Empty Cart</h1>
      </AmplifyAuthenticator>
    );
  }

  return (
    <AmplifyAuthenticator>
      <Elements stripe={stripePromise}>
        <StyledCheckout>
          <div className="col-md-auto pb-5">
            <h1>Checkout</h1>
            <div className="col-md-auto">
              <CheckoutForm />
            </div>
          </div>
        </StyledCheckout>
      </Elements>
    </AmplifyAuthenticator>
  );
};

export default Checkout;
