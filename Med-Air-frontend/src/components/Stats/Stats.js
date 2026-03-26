import React from 'react';
import './Stats.css';

function Stats() {
    return (
        <section className="section stats-section">
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-value">750k+</div>
                        <div className="stat-label">Deliveries completed across medical regions worldwide</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-value">2m 47s</div>
                        <div className="stat-label">Fastest delivery time for critical cold-chain vaccines</div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-value">12+</div>
                        <div className="stat-label">Years of platform iteration in emergency scenarios</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;
