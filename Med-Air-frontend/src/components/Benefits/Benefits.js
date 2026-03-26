import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Benefits.css";

const benefitsData = [
    {
        num: "01",
        title: "Fast",
        desc: "Get essentials in minutes, not hours or days. No more waiting around for your package to arrive.",
        img: `${process.env.PUBLIC_URL}/medical_box_arriving.png`
    },
    {
        num: "02",
        title: "Convenient",
        desc: "Order from your phone and have it delivered directly to your yard or driveway with precision. It's that simple.",
        img: `${process.env.PUBLIC_URL}/phone_ordering_drone.png`
    },
    {
        num: "03",
        title: "Eco friendly",
        desc: "With delivery at an all-time high, Wing drones take cars off the road, easing congestion and reducing environmental impact.",
        img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80"
    }
];

function Benefits() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="benefits" className="benefits-scroll-section">
            <div className="container">
                <div className="benefits-grid">
                    <div className="benefits-left">
                        {benefitsData.map((item, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <motion.div
                                    key={item.num}
                                    className={`benefit-scroll-item ${isActive ? "active" : ""}`}
                                    onViewportEnter={() => setActiveIndex(index)}
                                    // Trigger when the item hits the middle 50% of the screen
                                    viewport={{ margin: "-25% 0px -25% 0px" }}
                                >
                                    <div className="benefit-header">
                                        <span className="benefit-circle">{item.num}</span>
                                        <h3 className="benefit-title">{item.title}</h3>
                                    </div>
                                    <div className="benefit-body" style={{ paddingTop: 12 }}>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                    <div className="benefits-right">
                        <div className="benefits-image-wrapper">
                            {benefitsData.map((item, index) => {
                                const isActive = activeIndex === index;
                                return (
                                    <motion.img
                                        key={item.num}
                                        src={item.img}
                                        alt={item.title}
                                        className="benefits-hero-image"
                                        initial={false}
                                        animate={{
                                            opacity: isActive ? 1 : 0,
                                            scale: isActive ? 1 : 1.05
                                        }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        style={{
                                            position: index === 0 ? "relative" : "absolute",
                                            top: 0, left: 0,
                                            width: "100%", height: "100%",
                                            objectFit: "cover"
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Benefits;
