// import { useState, useEffect } from 'react';
// import './TabMenu.css';

// function TabMenu({ services, t }) {
//     const [activeTab, setActiveTab] = useState(0);

//     const handleTabClick = (index, sectionId) => {
//         setActiveTab(index);
//         const section = document.getElementById(sectionId);
//         if (section) {
//             section.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         }
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             const sections = services.map(service => 
//                 document.getElementById(service.sectionId)
//             );

//             const scrollPosition = window.scrollY + 100;

//             sections.forEach((section, index) => {
//                 if (section) {
//                     const { offsetTop, offsetHeight } = section;
//                     if (scrollPosition >= offsetTop && 
//                         scrollPosition < offsetTop + offsetHeight) {
//                         setActiveTab(index);
//                     }
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [services]);

//     return (
//         <nav className="tab-menu">
//             <div className="tab-menu-container">
//                 {services.map((service, index) => (
//                     <button
//                         key={service.id}
//                         className={`tab-item ${activeTab === index ? 'active' : ''}`}
//                         onClick={() => handleTabClick(index, service.sectionId)}
//                     >
//                         {t(service.nameKey)} 
//                     </button>
//                 ))}
//             </div>
//         </nav>
//     );
// }

// export default TabMenu;

// TabMenu.jsx - CON HEADER CONTEXT
// TabMenu.jsx - CON HEADER CONTEXT INTEGRADO
import { useState, useEffect, useRef } from 'react';
import { useHeader } from '../../contexts/HeaderContext'; // Ajusta la ruta
import './TabMenu.css';

function TabMenu({ services, t }) {
    const [activeTab, setActiveTab] = useState(0);
    const { headerVisible, headerHeight } = useHeader();
    const menuRef = useRef(null);

    const handleTabClick = (index, sectionId) => {
        setActiveTab(index);
        const section = document.getElementById(sectionId);
        if (section && menuRef.current) {
            // Calcular offsets considerando el header y el menu
            const menuHeight = menuRef.current.offsetHeight;
            const headerOffset = headerVisible ? headerHeight : 0;
            const sectionTop = section.getBoundingClientRect().top;
            const currentScrollY = window.scrollY;
            
            // Posición objetivo considerando header + menu
            const targetPosition = currentScrollY + sectionTop - headerOffset - menuHeight - 10;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!menuRef.current) return;
            
            const sections = services.map(service => 
                document.getElementById(service.sectionId)
            );

            // Punto de referencia: justo debajo del menu
            const menuRect = menuRef.current.getBoundingClientRect();
            const referencePoint = menuRect.bottom + 20;
            
            let currentActive = 0;
            
            // Encontrar la sección que está en el punto de referencia
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (section) {
                    const rect = section.getBoundingClientRect();
                    
                    // Si esta sección contiene el punto de referencia
                    if (rect.top <= referencePoint && rect.bottom > referencePoint) {
                        currentActive = i;
                        break;
                    }
                    // Si ya pasamos esta sección pero no hemos llegado a la siguiente
                    else if (rect.bottom < referencePoint && i < sections.length - 1) {
                        const nextSection = sections[i + 1];
                        if (nextSection) {
                            const nextRect = nextSection.getBoundingClientRect();
                            if (nextRect.top > referencePoint) {
                                currentActive = i;
                                break;
                            }
                        }
                    }
                }
            }
            
            // Verificar si estamos en la última sección
            const lastSection = sections[sections.length - 1];
            if (lastSection) {
                const lastRect = lastSection.getBoundingClientRect();
                // Si el top de la última sección ya pasó el punto de referencia
                if (lastRect.top < referencePoint) {
                    currentActive = sections.length - 1;
                }
            }
            
            setActiveTab(currentActive);
        };

        // Ejecutar al cargar y cuando cambie el header
        handleScroll();
        
        // Optimización con requestAnimationFrame
        let ticking = false;
        const scrollHandler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [services, headerVisible, headerHeight]);

    return (
        <nav ref={menuRef} className="tab-menu">
            <div className="tab-menu-container">
                {services.map((service, index) => (
                    <button
                        key={service.id}
                        className={`tab-item ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(index, service.sectionId)}
                    >
                        {t(service.nameKey)} 
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default TabMenu;