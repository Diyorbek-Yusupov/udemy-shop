import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
   const priceForStripe = price * 100;
   const publishableKey =
      "pk_test_51KUYimAx3mHoCzGQgjIoZn1Iq34HUyjNk6zuGelDIGfir3MVcQFb89NfwwcRbVdBEprN8Fyt0PdT1Au82Avo0Qj100KVSlsmlZ";

   const onToken = (token) => {
      console.log(token);
      alert("Payment successful");
   };
   return (
      <StripeCheckout
         label="Pay Now"
         name="E commerce"
         billingAddress
         shippingAddress
         image="https://picsum.photos/400/400"
         description={`Your total is ${price}$`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

export default StripeButton;
