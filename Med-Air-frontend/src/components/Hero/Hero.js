import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero hero-fullscreen">
            {/* Full Bleed Background Video */}
            <div className="hero-background">
                <video
                    src={process.env.PUBLIC_URL + "/videos/Drone_Vid.mp4"}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video-bg"
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-container-overlay">
                <div className="hero-content hero-content-light">
                    <div className="hero-badge">Deliveries, elevated.</div>
                    <h1 className="hero-title">Cutting Delivery Time when every second counts.</h1>
                    <p className="text-lead hero-subtitle">
                        A medical storefront experience inspired by minimalist design—built for rapid,
                        reliable healthcare delivery in high-risk environments.
                    </p>
                    <div className="hero-actions">
                        <a href="#get-started" className="btn btn-primary">Get delivery</a>
                        <a href="#how-it-works" className="btn btn-secondary btn-secondary-light">How it works</a>
                    </div>

                    <div className="hero-kickers">
                        <div className="kicker">
                            <strong>Instant relief</strong>
                            <span>Medicines & supplies in minutes</span>
                        </div>
                        <div className="kicker">
                            <strong>Cold chain ready</strong>
                            <span>Vaccines & temperature-sensitive kits</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
