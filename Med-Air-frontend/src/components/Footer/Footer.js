import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer section section-alt">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="brand-logo">
                            <div className="brand-cross"></div>
                        </div>
                        <h2>Med Air</h2>
                    </div>
                    <div className="footer-cta">
                        <h3 className="footer-cta-text">The future of medical delivery is here. Right on time.</h3>
                        <a href="#get-started" className="btn btn-primary">Get Delivery</a>
                    </div>
                </div>

                <div className="footer-grid">
                    <div className="footer-col">
                        <h4 className="footer-col-title">Solutions</h4>
                        <ul className="footer-links">
                            <li><a href="#store">Storefront</a></li>
                            <li><a href="#dispatch">Dispatch</a></li>
                            <li><a href="#analytics">Analytics</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-col-title">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#careers">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="footer-col-title">Legal</h4>
                        <ul className="footer-links">
                            <li><a href="#privacy">Privacy</a></li>
                            <li><a href="#terms">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Healthcare Airlift. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
