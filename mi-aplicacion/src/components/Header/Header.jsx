// import { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useLanguage } from '../../contexts/LanguageContext';
// import { useHeader } from '../../contexts/HeaderContext';
// import Navigation from '../Navigation/Navigation';
// import LanguageButton from '../Navigation/LanguageButton';
// import './Header.css';

// function Header() {
//     const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
//     const { setHeaderVisible, setHeaderHeight } = useHeader();
//     const location = useLocation();
//     const [isVisible, setIsVisible] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [hasBackground, setHasBackground] = useState(false);
//     const headerRef = useRef(null);

//      const routesWithBackground = [
//         getRoute('architecture'),
//         getRoute('management')
//     ];

//     const shouldHaveBackground = routesWithBackground.includes(location.pathname);


//     useEffect(() => {
//         if (headerRef.current) {
//             setHeaderHeight(headerRef.current.offsetHeight);
//         }
//     }, [setHeaderHeight]);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;
//             const twentyVh = window.innerHeight * 1; 
            
//             setHasBackground(currentScrollY > twentyVh);
            
//             if (currentScrollY < 50) {
//                 setIsVisible(true);
//                 setHeaderVisible(true);
//             } 
//             else if (currentScrollY > lastScrollY) {
//                 setIsVisible(false);
//                 setHeaderVisible(false);
//             } 
//             else if (currentScrollY < lastScrollY) {
//                 setIsVisible(true);
//                 setHeaderVisible(true);
//             }

//             setLastScrollY(currentScrollY);
//         };

//         handleScroll();
//         window.addEventListener('scroll', handleScroll);
        
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [lastScrollY, setHeaderVisible]);
    
//     return (
//         <div 
//             ref={headerRef}
//             className={`header-content ${!isVisible ? 'header-hidden' : ''} ${hasBackground && isVisible ? 'header-background' : ''}`}
//         >
//             <div className='header-top'>
//                 <Link to={getRoute('home')}>
//                     <div className='logo-container'>
//                         <div className='logo-content'>
//                             <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
//                         </div>
//                         <div className='logo-content-hover'>
//                             <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
//                         </div>
//                     </div>
//                 </Link>

//                 <div className='header-right'>
//                     <Navigation
//                         t={t}
//                         getRoute={getRoute}
//                         Link={Link}
//                     />
                    
//                     <LanguageButton 
//                         changeLanguage={changeLanguage}
//                         language={language}
//                         availableLanguages={availableLanguages}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header;









// import { useState, useEffect, useRef } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useLanguage } from '../../contexts/LanguageContext';
// import { useHeader } from '../../contexts/HeaderContext';
// import Navigation from '../Navigation/Navigation';
// import LanguageButton from '../Navigation/LanguageButton';
// import './Header.css';

// function Header() {
//     const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
//     const { setHeaderVisible, setHeaderHeight } = useHeader();
//     const location = useLocation();
//     const [isVisible, setIsVisible] = useState(true);
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [hasBackground, setHasBackground] = useState(false);
//     const headerRef = useRef(null);

//     const routesWithBackground = [
//         getRoute('architecture'),
//         getRoute('management')
//     ];

//     const shouldHaveBackground = routesWithBackground.includes(location.pathname);

//     useEffect(() => {
//         if (headerRef.current) {
//             setHeaderHeight(headerRef.current.offsetHeight);
//         }
//     }, [setHeaderHeight]);

//     useEffect(() => {
//         const handleScroll = () => {
//             const currentScrollY = window.scrollY;
//             const twentyVh = window.innerHeight * 1; 
            
//             if (shouldHaveBackground) {
//                 setHasBackground(true);
//             } else {
//                 setHasBackground(currentScrollY > twentyVh);
//             }
            
//             if (currentScrollY < 50) {
//                 setIsVisible(true);
//                 setHeaderVisible(true);
//             } 
//             else if (currentScrollY > lastScrollY) {
//                 setIsVisible(false);
//                 setHeaderVisible(false);
//             } 
//             else if (currentScrollY < lastScrollY) {
//                 setIsVisible(true);
//                 setHeaderVisible(true);
//             }

//             setLastScrollY(currentScrollY);
//         };

//         handleScroll();
//         window.addEventListener('scroll', handleScroll);
        
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, [lastScrollY, setHeaderVisible, shouldHaveBackground]);
    
//     return (
//         <div 
//             ref={headerRef}
//             className={`header-content ${!isVisible ? 'header-hidden' : ''} ${hasBackground && isVisible ? 'header-background' : ''}`}
//         >
//             <div className='header-top'>
//                 <Link to={getRoute('home')}>
//                     <div className='logo-container'>
//                         <div className='logo-content'>
//                             <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
//                         </div>
//                         <div className='logo-content-hover'>
//                             <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
//                         </div>
//                     </div>
//                 </Link>

//                 <div className='header-right'>
//                     <Navigation
//                         t={t}
//                         getRoute={getRoute}
//                         Link={Link}
//                     />
                    
//                     <LanguageButton 
//                         changeLanguage={changeLanguage}
//                         language={language}
//                         availableLanguages={availableLanguages}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header;








import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useHeader } from '../../contexts/HeaderContext';
import Navigation from '../Navigation/Navigation';
import LanguageButton from '../Navigation/LanguageButton';
import './Header.css';

function Header() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const { setHeaderVisible, setHeaderHeight } = useHeader();
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [hasBackground, setHasBackground] = useState(false);
    const headerRef = useRef(null);

    // Determinar qué clase de ruta es
    const getRouteClass = () => {
        const path = location.pathname;
        if (path === getRoute('architecture')) return 'route-architecture';
        if (path === getRoute('management')) return 'route-management';
        return '';
    };

    // Rutas donde el header debe tener fondo siempre (desde el inicio)
    const routesWithBackground = [
        getRoute('architecture'),
        getRoute('management')
    ];

    const shouldHaveBackground = routesWithBackground.includes(location.pathname);

    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [setHeaderHeight]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const twentyVh = window.innerHeight * 1; 
            
            // Si está en una ruta especial, siempre tiene fondo
            if (shouldHaveBackground) {
                setHasBackground(true);
            } else {
                setHasBackground(currentScrollY > twentyVh);
            }
            
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
    }, [lastScrollY, setHeaderVisible, shouldHaveBackground]);
    
    return (
        <div 
            ref={headerRef}
            className={`header-content ${!isVisible ? 'header-hidden' : ''} ${hasBackground && isVisible ? 'header-background' : ''} ${getRouteClass()}`}
        >
            <div className='header-top'>
                <Link to={getRoute('home')}>
                    <div className='logo-container'>
                        <div className='logo-content'>
                            <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
                        </div>
                        <div className='logo-content-hover'>
                            <img src="/Logos/original.png" alt="Jota-Arquitectura-logo" />
                        </div>
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