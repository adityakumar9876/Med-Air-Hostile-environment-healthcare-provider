import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentConfirmation.css';

function PaymentConfirmation() {
    const navigate = useNavigate();

    return (
        <div className="page-confirmation">
            <div className="confirmation-card">
                <div className="success-entrance-container">
                    <div className="success-icon-wrapper">
                        <svg className="animated-check" viewBox="0 0 52 52">
                            <circle className="animated-check-circle" cx="26" cy="26" r="25" />
                            <path className="animated-check-path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                </div>

                <h1>Payment Confirmed</h1>
                <p className="text-lead">Your medical supplies are being deployed.</p>

                <button
                    className="btn btn-primary btn-home"
                    onClick={() => navigate('/')}
                >
                    Return to Home
                </button>
            </div>
        </div>
    );
}

export default PaymentConfirmation;
