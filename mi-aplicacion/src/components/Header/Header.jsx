import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../Navigation/Navigation';
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

                    <div className='header-language'>
                        {availableLanguages.map(lang => (
                            <button
                                key={lang}
                                onClick={() => changeLanguage(lang)}
                                className={language === lang ? 'active' : ''}
                            >
                                {lang.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* <div className='header-bottom'>
                {availableLanguages.map(lang => (
                    <button
                        key={lang}
                        onClick={() => changeLanguage(lang)}
                        className={language === lang ? 'active' : ''}
                    >
                        {lang.toUpperCase()}
                    </button>
                ))}
            </div> */}
        </div>
    )
}

export default Header;