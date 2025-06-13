'use client';
import { stripePromise } from '@/lib/stripe';

export default function CheckoutButton() {
  const handleClick = async () => {
    const stripe = await stripePromise;
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
    });
    const session = await res.json();
    await stripe?.redirectToCheckout({ sessionId: session.id });
  };
  return <button onClick={handleClick} className="px-4 py-2 bg-black text-white rounded">Buy Now</button>;
}