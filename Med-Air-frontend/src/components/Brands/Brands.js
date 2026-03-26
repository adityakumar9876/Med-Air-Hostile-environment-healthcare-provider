import React from 'react';
import './Brands.css';

function LeagueOfLegends() {
    const brands = [
        {
            gradient: 'linear-gradient(135deg, #22c55e, #16a34a)',
            content: <img src="/logos/practo.png" alt="Practo" className="league-logo" />
        },
        {
            gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
            content: <img src="/logos/tata1mg.png" alt="Tata 1mg" className="league-logo" />
        },
        {
            gradient: 'linear-gradient(135deg, #2dd4bf, #14b8a6)',
            content: <img src="/logos/zepto.png" alt="Zepto" className="league-logo" />
        },
        {
            gradient: 'linear-gradient(135deg, #d4d400, #a3a300)',
            content: <div className="league-brand-text" style={{ fontSize: '1.3rem' }}><span style={{ fontSize: '1.7rem', marginRight: '4px' }}>E</span> ecom express</div>
        },
        {
            gradient: 'linear-gradient(135deg, #2dd4bf, #06b6d4)',
            content: <div className="league-brand-text" style={{ fontSize: '1.5rem' }}>∞ lenskart</div>
        },
        {
            gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
            content: <div className="league-brand-text" style={{ fontSize: '2rem', letterSpacing: '4px' }}>DTDC</div>
        },
        {
            gradient: 'linear-gradient(135deg, #84cc16, #65a30d)',
            content: <div className="league-brand-text" style={{ fontSize: '1.5rem', letterSpacing: '2px' }}>BLUE DART</div>
        }
    ];

    return (
        <section id="league" className="section section-alt league-section">
            <div className="container">
                <h2 className="league-title">Join The League Of Legends!</h2>

                <div className="league-grid">
                    <div className="league-row top-row">
                        {brands.slice(0, 4).map((brand, idx) => (
                            <div className="league-card" key={idx} style={{ background: brand.gradient }}>
                                {brand.content}
                            </div>
                        ))}
                    </div>
                    <div className="league-row bottom-row">
                        {brands.slice(4, 7).map((brand, idx) => (
                            <div className="league-card" key={idx} style={{ background: brand.gradient }}>
                                {brand.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LeagueOfLegends;
