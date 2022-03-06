import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51KFf1IAb174uvQEmwO8RSbDazThTmDaaRaSjyuinqaazeC8yESf1nCwkk9lqQmjEmEvkOTHfbYGs3pwZSi5B61w300V1ehp0jM"
  );

  return (
    <section>
      <AmplifyAuthenticator>
        <Elements stripe={stripePromise}>
          <section>
            <h2>Time to Checkout?</h2>
            <CheckoutForm />
          </section>
        </Elements>
      </AmplifyAuthenticator>
    </section>
  );
};

export default Checkout;
