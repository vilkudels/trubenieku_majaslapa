import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import Kopsavilkums from './Kopsavilkums';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const ApmaksasIevadforma = ({ pasutijumaMarkieris, nakamaisSolis, ieprieksejaisSolis, shippingData, nodrosinatPasutijumaSaksanu }) => {
  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log('[error]', error);
    } else {

      const orderData = {
        line_items: pasutijumaMarkieris.line_items,
        customer: { firstname: shippingData.vards, lastname: shippingData.uzvards, email: shippingData.epasts },
        shipping: { name: shippingData.piegadesOpcija, street: shippingData.adrese, town_city: shippingData.pilseta, county_state: shippingData.piegadesNovads, postal_zip_code: shippingData.pastaIndekss, country: shippingData.piegadesValsts },
        fulfillment: { shipping_method: shippingData.piegadesOpcija },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };

      nodrosinatPasutijumaSaksanu(pasutijumaMarkieris.id, orderData);

      nakamaisSolis();
    }
  };

  return (
    <>
      <Kopsavilkums pasutijumaMarkieris={pasutijumaMarkieris} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Apmaksas metode</Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <CardElement />
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={ieprieksejaisSolis}>Atpakaļ</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Maksāt {pasutijumaMarkieris.subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default ApmaksasIevadforma;