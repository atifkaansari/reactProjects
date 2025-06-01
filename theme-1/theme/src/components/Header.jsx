import React, { useEffect, useState } from 'react'
import '../css/Header.css'

const Header = () => {
    const [scrollStage, setScrollStage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 300) {
                setScrollStage(2);
            } else if (scrollY > 50) {
                setScrollStage(1);
            } else {
                setScrollStage(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <header className={`main-header scroll-${scrollStage}`}>
            <div className="container">
                <nav>
                    <p className='logo'><b>Logo</b> Name</p>
                    <ul>
                        <li className='nav-item'><a href='#'>Anasayfa</a></li>
                        <li className='nav-item'><a href='#hero'>Hakkımızda</a></li>
                        <li className='nav-item'><a href='#hero-cards'>Blog</a></li>
                        <li className='nav-item'><button>İletişim</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header