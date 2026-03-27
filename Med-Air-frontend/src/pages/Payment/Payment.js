import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Payment.css';

function Payment() {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const flightFee = subtotal > 0 ? 500 : 0;
    const total = subtotal + flightFee;

    const handlePayment = async (e) => {
        e.preventDefault();

        const name = document.getElementById('cardName').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!name) return alert('Please enter cardholder name.');
        if (!email) return alert('Please enter your email address.');

        setIsProcessing(true);

        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const res = await fetch(`${apiUrl}/checkout`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, cart: cartItems })
            });

            const data = await res.json();

            if (res.ok) {
                if (clearCart) clearCart();
                navigate('/confirmation');
            } else {
                alert(data.error || 'Something went wrong.');
            }
        } catch (error) {
            console.error('Payment request failed:', error);
            alert('Could not reach the server. Is it running?');
        } finally {
            setIsProcessing(false);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="page-payment empty-state">
                <div className="container">
                    <h2>No supplies to authorize.</h2>
                    <button className="btn btn-primary" onClick={() => navigate('/store')}>Return to Store</button>
                </div>
            </div>
        );
    }

    return (
        <div className="page-payment">
            <section className="section section-payment-header">
                <div className="container">
                    <div className="payment-header-content">
                        <h1>Authorize Deployment</h1>
                        <p className="text-lead">Provide payment details to secure immediate dispatch.</p>
                    </div>
                </div>
            </section>

            <section className="section section-alt section-payment-main">
                <div className="container">
                    <div className="payment-layout">
                        <div className="payment-form-container">
                            <h3>Payment Details</h3>
                            <form className="payment-form" onSubmit={handlePayment}>
                                <div className="form-group">
                                    <label>Cardholder Name</label>
                                    <input id="cardName" type="text" placeholder="Aditya Rajesh" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input id="email" type="email" placeholder="you@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label>Card Number</label>
                                    <input type="text" placeholder="XXXX XXXX XXXX XXXX" required />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Expiry Date</label>
                                        <input type="text" placeholder="MM/YY" required />
                                    </div>
                                    <div className="form-group">
                                        <label>CVV</label>
                                        <input type="password" placeholder="***" required />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block" disabled={isProcessing}>
                                    {isProcessing ? "Authorizing..." : `Pay ₹${total.toLocaleString('en-IN')}`}
                                </button>
                            </form>
                        </div>

                        <div className="payment-summary-container">
                            <h3>Order Summary</h3>
                            <div className="summary-list">
                                {cartItems.map(item => (
                                    <div key={item.id} className="summary-item">
                                        <span>{item.quantity}x {item.name}</span>
                                        <span>₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>₹{subtotal.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="summary-row">
                                <span>Flight Fee</span>
                                <span>₹{flightFee.toLocaleString('en-IN')}</span>
                            </div>
                            <div className="summary-row summary-total">
                                <span>Total Value</span>
                                <span>₹{total.toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Payment;
