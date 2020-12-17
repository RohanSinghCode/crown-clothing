import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HyKfkBvvSyht3ocdCZWouAbmju2pLeaR7r9N5XNA2OPZ13SPTLTApWHJzzvYjVYR8vr8JnoRq5KUY4jhSzYIxDa009RzWCktT';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
        />
    )
}


export default StripeCheckoutButton;