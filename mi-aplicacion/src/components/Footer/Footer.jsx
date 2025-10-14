import { NavLink, useLocation } from 'react-router-dom'; // Cambia Link por NavLink
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

function Footer() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const location = useLocation();

    const currentPath = location.pathname;
    const homeRoute = getRoute('home');
    const managementRoute = getRoute('management');

    const isDarkFooter = currentPath === homeRoute ||
        currentPath === managementRoute ||
        currentPath === '/';

    const navigationLinks = [
        { key: 'home', route: 'home' },
        { key: 'architecture', route: 'architecture' },
        { key: 'management', route: 'management' },
        { key: 'aboutUs', route: 'aboutUs' },
        { key: 'contact', route: 'contact' }
    ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section className={`footer-container ${isDarkFooter ? 'footer-dark' : 'footer-light'}`}>

            <div className='footer-f1'>
                <div className='col'>
                    <h1>{t('oficina')}</h1>
                    <p>{t('address1')}</p>
                    <p>{t('address2')} •</p>
                    <p>{t('address3')}</p>
                </div>
                <div className='col'>
                    <h1>{t('contacto')}</h1>
                    <p>+34 666 66 66 66</p>
                    <p>jota@arquitectura.es</p>
                </div>
                <div className='col'>
                    <h1>{t('rrss')}</h1>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                </div>
                <div className='col'>
                </div>
                <div className='col'>
                    <h1>{t('menu')}</h1>
                    <nav className='footer-nav'>
                        {navigationLinks.map(link => (
                            <NavLink
                                key={link.key}
                                to={getRoute(link.route)}
                                className={({ isActive }) =>
                                    isActive ? "footer-nav-link active" : "footer-nav-link"
                                }
                            >
                                {t(link.key)}
                            </NavLink>
                        ))}
                    </nav>
                </div>

            </div>

            <div className='footer-f2'>
                <div className='col'>
                    <img src="/Images/logo.png" alt="" />
                </div>

                <div className='col'>
                    <h2 className='jota-name'>Jota</h2>
                </div>

                <div className='col'>
                </div>

                <div className='col'>
                    <h2 className='arqAndgest'>arquitectura y gestión</h2>
                </div>
                <div className='col'>
                </div>
            </div>

            <div className='footer-f3'>
                <div className='col3'>
                    <h1>{t('cookiesAndPrivacy')}</h1>
                </div>

                <div className='col3'>
                    <h1>© 2025 Jota</h1>
                </div>

                <div className='col3'>
                    <h1
                        onClick={scrollToTop}
                        style={{ cursor: 'pointer' }}
                        className='up-button'
                    >
                        {t('up')}
                    </h1>
                </div>
            </div>
        </section>


    )
}

export default Footer;