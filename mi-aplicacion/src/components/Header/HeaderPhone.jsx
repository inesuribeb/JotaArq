import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import NavigationPhone from '../Navigation/NavigationPhone';
import './HeaderPhone.css';

function HeaderPhone() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* <div className='header-phone'> */}
            <div className={`header-phone ${isMenuOpen ? 'header-phone-open' : ''}`}>

                <div className='header-phone-viewed'>
                    {/* <Link to={getRoute('home')}>
                        <div className='logo-container-phone'>
                            <img src="/Logos/LogoPrueba.png" alt="Jota-Arquitectura-logo" />
                        </div>
                    </Link> */}
                    <Link to={getRoute('home')} style={{ visibility: isMenuOpen ? 'hidden' : 'visible' }}>
                        <div className='logo-container-phone'>
                            <img src="/Logos/LogoPrueba.png" alt="Jota-Arquitectura-logo" />
                        </div>
                    </Link>

                    <button className='button-menu-phone' onClick={toggleMenu}>
                        {isMenuOpen ? t('close') : t('menu')}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <NavigationPhone
                    t={t}
                    getRoute={getRoute}
                    changeLanguage={changeLanguage}
                    language={language}
                    availableLanguages={availableLanguages}
                    onClose={toggleMenu}
                />
            )}
        </>
    )
}

export default HeaderPhone;