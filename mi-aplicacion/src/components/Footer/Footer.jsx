import { NavLink, useLocation } from 'react-router-dom'; // Cambia Link por NavLink
import { useLanguage } from '../../contexts/LanguageContext';
import { Instagram, Linkedin } from 'lucide-react'; // Importa los iconos
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';


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

    const isDarkFooter = currentPath === homeRoute ||
        currentPath === managementRoute ||
        currentPath === arhitectureRoute ||
        currentPath === aboutUsRoute ||
        currentPath === contactRoute ||
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


            <div className='footer-f2'>
                <img src="/Logos/jotaBlanco.png" alt="" />
            </div>

            {/* <div className='footer-logos'>
                <a href="https://instagram.com/jota.arquitectura_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com/company/jota-arquitectura" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin size={24} />
                </a>
            </div> */}

            <div className='footer-f1'>
                {/* <div className='col'>
                    <h1>{t('oficina')}</h1>
                    <p>{t('address1')}</p>
                    <p>{t('address2')} •</p>
                    <p>{t('address3')}</p>
                    <p></p>
                    <p>jota@arquitectura.es</p>
                    <p>+34 666 66 66 66</p>
                    
                </div> */}
                {/* <div className='col'>
                    <h1>{t('contacto')}</h1>
                    <p>+34 666 66 66 66</p>
                    <p>jota@arquitectura.es</p>
                </div> */}
                {/* <div className='col'>
                    <h1>{t('rrss')}</h1>
                    <p>Instagram</p>
                    <p>Linkedin</p>
                </div> */}
                {/* <div className='col'>
                </div> */}
                <div className='col'>
                    {/* <h1>{t('menu')}</h1> */}
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

            {/* <div className='footer-f2'>
                <img src="/Logos/jotaBlanco.png" alt="" />
            </div> */}

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