// import { NavLink } from 'react-router-dom';
// import { useLanguage } from '../../contexts/LanguageContext';
// import './SiteMap.css';

// function SiteMap() {
//     const { t, getRoute } = useLanguage();

//     const navigationLinks = [
//         { key: 'home', route: 'home' },
//         { key: 'architecture', route: 'architecture' },
//         { key: 'management', route: 'management' },
//         { key: 'aboutUs', route: 'aboutUs' },
//         { key: 'contact', route: 'contact' }
//     ];

//     return (
//         <div className="sitemap-container">
//             <h1>{t('siteMap')}</h1>
//             <nav className="sitemap-nav">
//                 {navigationLinks.map(link => (
//                     <NavLink
//                         key={link.key}
//                         to={getRoute(link.route)}
//                         className="sitemap-link"
//                     >
//                         {t(link.key)}
//                     </NavLink>
//                 ))}
//             </nav>
//         </div>
//     )
// }

// export default SiteMap;

import { NavLink } from 'react-router-dom';
import './SiteMap.css';

function SiteMap() {
    console.log('SiteMap cargando...');

    return (
        <div className="sitemap-container">
            <h1>Mapa del Sitio</h1>
            <nav className="sitemap-nav">
                <NavLink to="/inicio" className="sitemap-link">Inicio</NavLink>
                <NavLink to="/arquitectura" className="sitemap-link">Arquitectura</NavLink>
                <NavLink to="/gestion" className="sitemap-link">Gestión</NavLink>
                <NavLink to="/sobre-nosotros" className="sitemap-link">Nosotros</NavLink>
                <NavLink to="/contacto" className="sitemap-link">Contacto</NavLink>
            </nav>
        </div>
    )
}

export default SiteMap;