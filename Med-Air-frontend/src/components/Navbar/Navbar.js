import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">Med-Air</a>
                </div>
                <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="navbar-item">
                        <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/store" onClick={() => setIsMenuOpen(false)}>Store</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/cart" onClick={() => setIsMenuOpen(false)}>Cart</a>
                    </li>
                    <li className="navbar-item">
                        <a href="/resource-dashboard.html" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Resource Dashboard</a>
                    </li>
                    <li className="navbar-item">
                        <a href="https://ml-triage.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Triage</a>
                    </li>
                    <li className="navbar-item">
                        <a href="https://med-air-drone-path-finalizing-syste-eta.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Tracking</a>
                    </li>
                    <li className="navbar-item">
                        <a href="https://main-video-compo-of-med-air.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Video Call</a>
                    </li>
                    <li className="navbar-item">
                        <a href="https://heh-helpdesk.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>Helpdesk</a>
                    </li>
                </ul>
                <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
