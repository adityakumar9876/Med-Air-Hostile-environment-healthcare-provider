import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Cart.css';

function Cart() {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const flightFee = subtotal > 0 ? 500 : 0;
    const total = subtotal + flightFee;

    return (
        <div className="page-cart">
            <section className="section section-cart-header">
                <div className="container">
                    {/* ... */}
                    <div className="cart-header-content">
                        <h1>Your Flight Cart</h1>
                        <p className="text-lead">Review supplies for your upcoming deployment.</p>
                    </div>
                </div>
            </section>

            <section className="section section-alt section-cart-main">
                <div className="container">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart-message">
                            <p>Your flight is currently empty. Head to the store to add critical supplies.</p>
                        </div>
                    ) : (
                        <div className="cart-layout">
                            <div className="cart-items-list">
                                {cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <div className="cart-item-details">
                                            <div className="cart-item-header">
                                                <h3 className="cart-item-name">{item.name}</h3>
                                                <span className="cart-item-price">₹{item.price.toLocaleString('en-IN')}</span>
                                            </div>
                                            <p className="cart-item-desc">{item.description}</p>
                                            <div className="cart-item-meta">
                                                <span className="cart-item-eta">Estimated ETA: 10 mins</span>
                                                <span className="cart-item-qty">Qty: {item.quantity}</span>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-sm cart-item-remove"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-summary">
                                <h3>Flight Summary</h3>
                                <div className="summary-row">
                                    <span>Supplies Subtotal</span>
                                    <span>₹{subtotal.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Emergency Airlift Fee</span>
                                    <span>₹{flightFee.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="summary-row summary-total">
                                    <span>Total Value</span>
                                    <span>₹{total.toLocaleString('en-IN')}</span>
                                </div>
                                <button
                                    className="btn btn-primary btn-block"
                                    onClick={() => navigate('/payment')}
                                >
                                    Confirm Deployment
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Cart;
