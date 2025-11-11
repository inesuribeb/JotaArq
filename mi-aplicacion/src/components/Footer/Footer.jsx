import { NavLink, useLocation } from 'react-router-dom'; // Cambia Link por NavLink
import { useLanguage } from '../../contexts/LanguageContext';
import { Instagram, Linkedin } from 'lucide-react'; // Importa los iconos
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import { HiChevronUp } from 'react-icons/hi2'; // Importa el ícono de flecha hacia arriba

import './Footer.css';

function Footer() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const location = useLocation();

    const currentPath = location.pathname;
    const homeRoute = getRoute('home');
    const managementRoute = getRoute('management');
    const arhitectureRoute = getRoute('architecture');
    const aboutUsRoute = getRoute('aboutUs');
    const contactRoute = getRoute('contact');


    const navigationLinks = [
        { key: 'home', route: 'home' },
        { key: 'architecture', route: 'architecture' },
        { key: 'management', route: 'management' },
        { key: 'aboutUs', route: 'aboutUs' },
        { key: 'contact', route: 'contact' }
    ];

    const isDarkFooter = currentPath === homeRoute ||
        currentPath === managementRoute ||
        currentPath === arhitectureRoute ||
        currentPath === aboutUsRoute ||
        currentPath === contactRoute ||
        currentPath === '/' ||
        !navigationLinks.some(link => currentPath === getRoute(link.route)); // Cualquier ruta no definida (NotFound)


    // const navigationLinks = [
    //     { key: 'home', route: 'home' },
    //     { key: 'architecture', route: 'architecture' },
    //     { key: 'management', route: 'management' },
    //     { key: 'aboutUs', route: 'aboutUs' },
    //     { key: 'contact', route: 'contact' }
    // ];

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <section className={`footer-container ${isDarkFooter ? 'footer-dark' : 'footer-light'}`}>


            <div className='footer-f2'>
                <img src="/Logos/logoNegroCompleto2.png" alt="" />
            </div>

            <div className='footer-f1'>
                <div className='col'>
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

            <div className='footer-logos'>
                <a href="https://www.instagram.com/jota.arquitectura_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={24} />
                </a>
                <a href="https://www.linkedin.com/company/jotaarq/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={24} />
                </a>
            </div>

            <div className='footer-f3'>
                <div className='col3'>
                    <h1>{t('cookiesAndPrivacy')}</h1>
                </div>

                <div className='col3'>
                    <h1>© 2025 Jota</h1>
                </div>

                <div className='col3'>
                    {/* <h1
                        onClick={scrollToTop}
                        style={{ cursor: 'pointer' }}
                        className='up-button'
                    >
                        {t('up')}
                    </h1> */}
                    <h1
                        onClick={scrollToTop}
                        className='up-button'
                    >
                        {t('up')} <HiChevronUp className="up-arrow-icon" size={20} strokeWidth={3} />
                    </h1>
                </div>
            </div>
        </section>


    )
}

export default Footer;