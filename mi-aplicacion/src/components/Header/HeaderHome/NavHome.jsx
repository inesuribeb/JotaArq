// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './NavHome.css';

// function NavHome({ t, getRoute, changeLanguage, language, availableLanguages, onClose, isClosing }) {
//     const location = useLocation();
//     const [hoveredIndex, setHoveredIndex] = useState(null);

//     const navigationItems = [
//         { key: 'architecture', route: 'architecture' },
//         { key: 'management', route: 'management' },
//         { key: 'aboutUs', route: 'aboutUs' },
//         { key: 'contact', route: 'contact' }
//     ];

//     return (
//         <div className='navigation-home'>
//             <div className='home-h-col-left'>
//                 <h1>Jota</h1>
//                 <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
//                 <h1 dangerouslySetInnerHTML={{ __html: t('homeIntro') }}></h1>
//             </div>
//             <div className='home-h-col-right'>
//                 <div>
//                     <h1>idiomas</h1>
//                 </div>
//                 <div className='home-navigation'>
//                     <nav className='header-home-nav'>
//                         {/* Línea animada */}
//                         <div 
//                             className="nav-line-indicator"
//                             style={{
//                                 transform: hoveredIndex !== null 
//                                     ? `translateY(${hoveredIndex * 100}%)` 
//                                     : 'scaleY(0)',
//                                 opacity: hoveredIndex !== null ? 1 : 0
//                             }}
//                         />

//                         {navigationItems.map((item, index) => (
//                             <Link
//                                 key={item.key}
//                                 to={getRoute(item.route)}
//                                 className={`${location.pathname === getRoute(item.route) ? 'active' : ''}`}
//                                 onMouseEnter={() => setHoveredIndex(index)}
//                                 onMouseLeave={() => setHoveredIndex(null)}
//                             >
//                                 {t(item.key)}
//                             </Link>
//                         ))}
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NavHome;


// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import './NavHome.css';

// function NavHome({ t, getRoute, changeLanguage, language, availableLanguages, onClose, isClosing }) {
//     const location = useLocation();
//     const [hoveredIndex, setHoveredIndex] = useState(null);
//     const [hasBeenHovered, setHasBeenHovered] = useState(false);

//     const navigationItems = [
//         { key: 'home', route: 'home' },
//         { key: 'architecture', route: 'architecture' },
//         { key: 'management', route: 'management' },
//         { key: 'aboutUs', route: 'aboutUs' },
//         { key: 'contact', route: 'contact' }
//     ];

//     const handleMouseEnter = (index) => {
//         setHoveredIndex(index);
//         if (!hasBeenHovered) {
//             setHasBeenHovered(true);
//         }
//     };

//     return (
//         <div className='navigation-home'>
//             <div className='home-h-col-left'>
//                 <h1>Jota</h1>
//                 <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
//                 <h1 dangerouslySetInnerHTML={{ __html: t('homeIntro') }} className='statement-general'></h1>
//             </div>
//             <div className='home-h-col-right'>
//                 <div>
//                     <h1>idiomas</h1>
//                 </div>
//                 <div className='home-navigation'>
//                     <nav className='header-home-nav'>
//                         {/* Línea animada */}
//                         <div 
//                             className={`nav-line-indicator ${!hasBeenHovered && hoveredIndex !== null ? 'first-hover' : ''}`}
//                             style={{
//                                 transform: hoveredIndex !== null 
//                                     ? `translateY(${hoveredIndex * 100}%)` 
//                                     : 'scaleY(0)',
//                                 opacity: hoveredIndex !== null ? 1 : 0
//                             }}
//                         />

//                         {navigationItems.map((item, index) => (
//                             <Link
//                                 key={item.key}
//                                 to={getRoute(item.route)}
//                                 className={`${location.pathname === getRoute(item.route) ? 'active' : ''}`}
//                                 onMouseEnter={() => handleMouseEnter(index)}
//                                 onMouseLeave={() => setHoveredIndex(null)}
//                             >
//                                 {t(item.key)}
//                             </Link>
//                         ))}
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default NavHome;

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LanguageButtonPhone from '../../Navigation/LanguageButtonPhone';
import CarouselHome from './CarouselHome';
import './NavHome.css';

function NavHome({ t, getRoute, changeLanguage, language, availableLanguages, onClose, isClosing }) {
    const location = useLocation();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hasBeenHovered, setHasBeenHovered] = useState(false);

    const navigationItems = [
        // { key: 'home', route: 'home' },
        { key: 'architecture', route: 'architecture' },
        { key: 'management', route: 'management' },
        { key: 'aboutUs', route: 'aboutUs' },
        { key: 'contact', route: 'contact' }
    ];

    const handleMouseEnter = (index) => {
        if (!hasBeenHovered) {
            setHasBeenHovered(true);
        }
        setHoveredIndex(index);
    };

    return (
        <div className='navigation-home'>
            <div className='home-h-col-left'>
                <h1>Jota</h1>
                <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
                <h1 dangerouslySetInnerHTML={{ __html: t('homeIntro') }} className='statement-general'></h1>
            </div>

            <div className='carousel-home-imported'>
                    <CarouselHome />
                </div>

            <div className='home-h-col-right'>
                <div className='home-language'>
                    <LanguageButtonPhone
                        changeLanguage={changeLanguage}
                        language={language}
                        availableLanguages={availableLanguages}
                        onClose={onClose}
                    />
                </div>
                <div className='home-navigation'>
                    <nav className='header-home-nav'>
                        <div
                            className={`nav-line-indicator ${!hasBeenHovered && hoveredIndex !== null ? 'first-hover' : ''} ${hoveredIndex !== null ? 'visible' : ''}`}
                            style={{
                                '--hover-index': hoveredIndex
                            }}
                        />

                        {navigationItems.map((item, index) => (
                            <Link
                                key={item.key}
                                to={getRoute(item.route)}
                                className={`${location.pathname === getRoute(item.route) ? 'active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {t(item.key)}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className='home-header-contact'>
                    <h2>{t('contactWithUs')}</h2>
                    {/* <h2 className='grey'>Instagram</h2>
                    <h2 className='grey'>Linkedin</h2> */}
                    <h2 className='grey'>
                        <a href="https://www.instagram.com/jota.arquitectura_/" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </a>
                    </h2>
                    <h2 className='grey'>
                        <a href="https://www.linkedin.com/company/jotaarq/" target="_blank" rel="noopener noreferrer">
                            Linkedin
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default NavHome;