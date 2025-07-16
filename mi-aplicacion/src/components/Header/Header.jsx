import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../Navigation/Navigation';
import LanguageButton from '../Navigation/LanguageButton'
import './Header.css'

function Header() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    
    return (
        <div className='header-content'>
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