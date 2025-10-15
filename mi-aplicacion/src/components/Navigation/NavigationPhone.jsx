import { useLocation, Link } from 'react-router-dom';
import LanguageButtonPhone from './LanguageButtonPhone';
import CarouselHeader from '../Header/CarouselHeader/CarouselHeader';
import './NavigationPhone.css';

function NavigationPhone({ t, getRoute, changeLanguage, language, availableLanguages, onClose }) {
    const location = useLocation();

    const navigationItems = [
        { key: 'architecture', route: 'architecture' },
        { key: 'management', route: 'management' },
        { key: 'aboutUs', route: 'aboutUs' },
        { key: 'contact', route: 'contact' }
    ];

    return (
        <div className="navigation-phone-overlay">
            <div className="navigation-phone-content">
                <Link to={getRoute('home')} onClick={onClose}>
                    <div className="navigation-phone-logo">
                        <img src="/Logos/LogoPrueba.png" alt="Jota Logo" />
                    </div>
                </Link>

                <div className='carousel-header-imported'>
                    <CarouselHeader />
                </div>

                <div className='nav-and-lng'>
                    <nav className='navigation-phone-nav'>
                        {navigationItems.map(item => (
                            <Link
                                key={item.key}
                                to={getRoute(item.route)}
                                className={`navigation-phone-link ${location.pathname === getRoute(item.route) ? 'active-phone' : ''}`}
                                onClick={onClose}
                            >
                                {t(item.key)}
                            </Link>
                        ))}
                    </nav>

                    <LanguageButtonPhone
                        changeLanguage={changeLanguage}
                        language={language}
                        availableLanguages={availableLanguages}
                    />
                </div>
            </div>
        </div>
    );
}

export default NavigationPhone;