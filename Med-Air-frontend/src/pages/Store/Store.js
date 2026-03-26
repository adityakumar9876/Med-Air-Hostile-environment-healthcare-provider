import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import vaccineImg from '../../assets/vaccine_pack.png';
import rabiesImg from '../../assets/rabies_kit.png';
import './Store.css';

function Store() {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const products = [
        { id: 1, name: "Emergency Trauma Kit", category: "Kits", price: 12500, image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=400", description: "Hemostatics, pressure dressings, tourniquet, gloves, shears.", availability: "In stock · ETA ≤ 10 min", },
        { id: 2, name: "Essential Medicines Pack", category: "Medicines", price: 3800, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400", description: "Analgesics, antipyretics, oral rehydration salts, antiseptics.", availability: "In stock · ETA ≤ 10 min", },
        { id: 3, name: "Cold-Chain Vaccines", category: "Vaccines", price: 95000, image: vaccineImg, description: "WHO-prequalified vaccines shipped in validated cold-chain carriers with live temperature telemetry.", availability: "Cold-chain maintained · ETA ≤ 10 min", },
        { id: 4, name: "Packed Red Cells & Plasma", category: "Blood products", price: 24500, image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=400", description: "Cross-matched blood components and plasma units for trauma and emergency transfusion support.", availability: "Priority handling · ETA ≤ 10 min", },
        { id: 5, name: "Insulin & Glucose Pack", category: "Insulin", price: 6800, image: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400", description: "Refrigerated insulin vials, pens, and dextrose for acute glycemic emergencies.", availability: "Cold-chain maintained · ETA ≤ 10 min", },
        { id: 6, name: "Rabies Post-Exposure Kit", category: "Rabies", price: 18500, image: rabiesImg, description: "Rabies vaccine + immunoglobulin doses packaged for post-exposure protocols.", availability: "Critical path · ETA ≤ 10 min", },
        { id: 7, name: "Automated External Defibrillator (AED)", category: "Equipment", price: 155000, image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=400", description: "Portable, life-saving electronic device that diagnoses life-threatening cardiac arrhythmias and treats them through defibrillation.", availability: "In stock · ETA ≤ 10 min", },
    ];

    const [activeCategory, setActiveCategory] = useState('All');

    // Extract unique categories from products to build the filter nav
    const categories = ['All', ...new Set(products.map(p => p.category))];

    // Filter products based on selected category
    const filteredProducts = activeCategory === 'All'
        ? products
        : products.filter(p => p.category === activeCategory);

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <div className="page-store">
            <section className="section section-store-header">
                <div className="container">
                    <div className="store-header-content">
                        <h1>Medical Store</h1>
                        <p className="text-lead">Curated emergency supplies, medicines, and equipment ready for rapid deployment via airlift.</p>
                    </div>

                    <div className="store-filters">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-alt section-store-grid">
                <div className="container">
                    <div className="store-grid">
                        {filteredProducts.map(p => (
                            <article key={p.id} className="product-card">
                                <div className="product-image-container">
                                    <img src={p.image} alt={p.name} className="product-image" />
                                    <div className="product-tag">{p.category}</div>
                                </div>
                                <div className="product-content">
                                    <h3 className="product-name">{p.name}</h3>
                                    <div className="product-price">₹{p.price.toLocaleString('en-IN')}</div>
                                    <p className="product-desc">{p.description}</p>
                                    <div className="product-meta">
                                        <div className="availability-dot"></div>
                                        <span className="product-availability">{p.availability}</span>
                                    </div>
                                    <div className="product-actions">
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() => handleAddToCart(p)}
                                        >
                                            Add to flight
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Store;
