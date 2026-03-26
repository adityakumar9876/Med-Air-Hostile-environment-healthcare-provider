import React from 'react';
import './HowItWorks.css';

function HowItWorks() {
    return (
        <section id="how-it-works" className="section">
            <div className="container">
                <div className="section-header">
                    <h2>How it works</h2>
                    <p className="text-lead">From checkout to doorstep—designed for speed and clarity.</p>
                </div>

                <div className="steps-grid">
                    <div className="step-card">
                        <div className="step-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80"
                                alt="Medical Pharmacy supplies"
                                className="step-image"
                            />
                        </div>
                        <div className="step-number">01</div>
                        <h3 className="step-title">Shop with partners</h3>
                        <p className="step-body">Browse verified medical suppliers and local facilities with real-time stock visibility.</p>
                    </div>

                    <div className="step-card">
                        <div className="step-image-wrapper">
                            <img
                                src={process.env.PUBLIC_URL + "/india_map.png"}
                                alt="Map of India showing delivery coverage"
                                className="step-image"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="step-number">02</div>
                        <h3 className="step-title">Pick your drop zone</h3>
                        <p className="step-body">Choose a secure, geofenced outdoor location or a designated clinic handoff point. Once selected, our system verifies the zone for a safe and precise landing.</p>
                    </div>

                    <div className="step-card">
                        <div className="step-image-wrapper">
                            <img
                                src={process.env.PUBLIC_URL + "/delivery_drone.png"}
                                alt="Drone delivering a package"
                                className="step-image"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="step-number">03</div>
                        <h3 className="step-title">Get rapid delivery</h3>
                        <p className="step-body">Live route updates, chain-of-custody events, and proof-of-delivery in one unified view.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
