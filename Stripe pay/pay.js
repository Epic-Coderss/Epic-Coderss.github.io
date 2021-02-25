const stripe = require('stripe')('sk_test_51IOWxzGWj8A1Mt9ysSad6LRcbJ1jaEsIWXr6TqWza4yejVl9P5ici9LzaJzkBhv8jpwh8rwjCOnN5ENwsAX5JaO400oOOmSMl1');
const express = require('express');
const app = express();
app.use(express.static('.'));
const YOUR_DOMAIN = 'http://localhost:63342';
app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Stubborn Attachments',
                        images: ['https://i.imgur.com/EHyR2nP.png'],
                    },
                    unit_amount: 2000,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success.html`,
        cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
    res.json({ id: session.id });
});
app.listen(4242, () => console.log('Running on port 63342'));