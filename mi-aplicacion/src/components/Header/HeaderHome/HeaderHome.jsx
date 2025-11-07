import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import NavHome from './NavHome';
import './HeaderHome.css';

function HeaderHome() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleMenu = () => {
        if (isMenuOpen) {
            // Si está abierto, iniciamos el cierre con animación
            setIsClosing(true);
            setTimeout(() => {
                setIsMenuOpen(false);
                setIsClosing(false);
            }, 600); // Debe coincidir con la duración de la animación
        } else {
            // Si está cerrado, lo abrimos directamente
            setIsMenuOpen(true);
        }
    };
    return (
        <div className='header-home-content'>
            {/* <h1>headerHome</h1> */}
            <Link to={getRoute('home')}>
                <div className='logo-container-home'>
                    <div className='logo-content-home'>
                        <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
                    </div>
                    <div className='logo-content-hover'>
                        <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
                    </div>
                </div>
            </Link>

            <button className='button-menu-home' onClick={toggleMenu}>
                {isMenuOpen ? t('close') : t('menu')}
            </button>

            {isMenuOpen && (
                <NavHome
                    t={t}
                    getRoute={getRoute}
                    changeLanguage={changeLanguage}
                    language={language}
                    availableLanguages={availableLanguages}
                    onClose={toggleMenu}
                    isClosing={isClosing}
                    className={isClosing ? 'closing' : ''}
                />
            )}
        </div>
    )
}

export default HeaderHome;