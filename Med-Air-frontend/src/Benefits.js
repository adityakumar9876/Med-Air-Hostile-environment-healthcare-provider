import React from "react";
import "./Benefits.css";

function Benefits() {
    return (
        <section id="benefits" className="benefits-section">
            <div className="container">
                <div className="sectionHeader">
                    <h2>Benefits</h2>
                    <p>Fast, convenient, and resource-aware—built for critical operations.</p>
                </div>

                <div className="benefits-container">
                    <div className="benefits-left">
                        <div className="benefit-item">
                            <span className="benefit-number">01</span>
                            <span className="benefit-text">Quick Delivery</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-number">02</span>
                            <span className="benefit-text">Easy Ordering</span>
                        </div>
                        <div className="benefit-item">
                            <span className="benefit-number">03</span>
                            <span className="benefit-text">Trusted Medicines</span>
                        </div>
                        <p className="benefits-description">
                            Experience fast and reliable medicine delivery directly to your location,
                            ensuring you have what you need when you need it.
                        </p>
                    </div>
                    <div className="benefits-right">
                        <img src="/medical-delivery.jpg" alt="Medical delivery" className="benefits-image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
