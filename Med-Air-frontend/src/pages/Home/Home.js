import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import Benefits from '../../components/Benefits/Benefits';
import Stats from '../../components/Stats/Stats';
import News from '../../components/Brands/Brands';
import LoginModal from '../../components/LoginModal/LoginModal';

function Home() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

    return (
        <div className="page-home">
            <LoginModal 
                isOpen={isLoginModalOpen} 
                onClose={() => setIsLoginModalOpen(false)} 
            />
            <Hero />
            <HowItWorks />
            <Benefits />
            <Stats />
            <News />
        </div>
    );
}

export default Home;
