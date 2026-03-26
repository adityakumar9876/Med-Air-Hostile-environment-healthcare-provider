import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">Med-Air</a>
                </div>
                <ul className="navbar-menu">
                    <li className="navbar-item">
                        <a href="/resource-dashboard.html" target="_blank" rel="noopener noreferrer">Resource Dashboard</a>
                    </li>
                    <li className="navbar-item">
                        <a href="https://ml-triage.vercel.app/" target="_blank" rel="noopener noreferrer">Triage</a>
                    </li>
                    <li className="navbar-item">
                        <a href="https://med-air-drone-path-finalizing-syste-eta.vercel.app/" target="_blank" rel="noopener noreferrer">Tracking</a>
                    </li>
                    <li className="navbar-item">
                        <a href="https://main-video-compo-of-med-air.vercel.app/" target="_blank" rel="noopener noreferrer">Video Call</a>
                    </li>
                    <li className="navbar-item">
                        <a href="https://heh-helpdesk.vercel.app/" target="_blank" rel="noopener noreferrer">Helpdesk</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;