import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useHeader } from '../../contexts/HeaderContext';
import Navigation from '../Navigation/Navigation';
import LanguageButton from '../Navigation/LanguageButton';
import './Header.css';

function Header() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const { setHeaderVisible, setHeaderHeight } = useHeader();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasBackground, setHasBackground] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [setHeaderHeight]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const twentyVh = window.innerHeight * 1; 
            
            setHasBackground(currentScrollY > twentyVh);
            
            if (currentScrollY < 50) {
                setIsVisible(true);
                setHeaderVisible(true);
            } 
            else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
                setHeaderVisible(false);
            } 
            else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
                setHeaderVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, setHeaderVisible]);
    
    return (
        <div 
            ref={headerRef}
            className={`header-content ${!isVisible ? 'header-hidden' : ''} ${hasBackground ? 'header-background' : ''}`}
        >
            <div className='header-top'>
                <Link to={getRoute('home')}>
                    <div className='logo-container'>
                        <img src="/Logos/LogoPrueba.png" alt="Jota-Arquitectura-logo" />
                    </div>
                </Link>

                <div className='header-right'>
                    <Navigation
                        t={t}
                        getRoute={getRoute}
                        Link={Link}
                    />
                    
                    <LanguageButton 
                        changeLanguage={changeLanguage}
                        language={language}
                        availableLanguages={availableLanguages}
                    />
                </div>
            </div>
        </div>
    )
}

export default Header;