import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment.form.styles";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState } from "react";


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);

    const paymentHandler = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) {
        return;
      }
      setIsProcessingPayment(true);
      const response = await fetch("/.netlify/functions/create-payment-intent", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: amount * 100 }),
      }).then((res) => {
        return res.json();
      });
  
      const clientSecret = response.paymentIntent.client_secret;
  
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "Yihua Zhang",
          },
        },
      });
  
      setIsProcessingPayment(false);
  
      if (paymentResult.error) {
        alert(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          alert("Payment Successful!");
        }
      }
    };

    return(
        <PaymentFormContainer onSubmit={paymentHandler}>
        <FormContainer>
            <h2>Credit Card payment: </h2>
            <CardElement />
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} isLoading={isProcessingPayment}> Pay now </Button>
        </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;