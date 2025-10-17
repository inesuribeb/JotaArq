// Version tabmenu arriba

// import { createPortal } from 'react-dom';
// import { useState, useEffect, useRef } from 'react';
// import { useHeader } from '../../../../contexts/HeaderContext';
// import TabMenu from "../../../../components/TabMenu/TabMenu";
// import UrbanDesign from "./components/UrbanDesign/UrbanDesign";
// import Edification from "./components/Edification/Edification";
// import Licenses from "./components/Licenses/Licenses";
// import Sostenibility from "./components/Sostenibility/Sostenibility";
// import './ArqServices.css';

// function ArqServices({ t }) {
//     const { headerVisible, headerHeight } = useHeader();
//     const [showFixedMenu, setShowFixedMenu] = useState(false);
//     const wrapperRef = useRef(null);

//     const services = [
//         { id: 1, nameKey: 'diseñoUrbano', sectionId: 'section-urbanDesign' },
//         { id: 2, nameKey: 'edificacion', sectionId: 'section-edification' },
//         { id: 3, nameKey: 'tramitacionLicencias', sectionId: 'section-tramitation' },
//         { id: 4, nameKey: 'sostenibilidad', sectionId: 'section-sostenibility' }
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             if (wrapperRef.current) {
//                 const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
//                 const wrapperBottom = wrapperRef.current.getBoundingClientRect().bottom;
//                 const threshold = headerVisible ? headerHeight : 0;
                
//                 // Mostrar menú fijo cuando el wrapper pase el threshold y aún esté visible
//                 setShowFixedMenu(wrapperTop <= threshold && wrapperBottom > 100);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [headerVisible, headerHeight]);

//     const topPosition = headerVisible ? headerHeight : 0;

//     return (
//         <>
//             {showFixedMenu && createPortal(
//                 <div 
//                     className="tab-menu-fixed"
//                     style={{ top: `${topPosition}px` }}
//                 >
//                     <TabMenu services={services} t={t}/>
//                 </div>,
//                 document.body
//             )}

//             <div ref={wrapperRef} className="arq-services-wrapper">
//                 <div className="tab-menu-wrapper">
//                     <TabMenu services={services} t={t}/>
//                 </div>

//                 <div className="arq-services-content">
//                     <section id="section-urbanDesign" className="service-section">
//                         <UrbanDesign t={t} />
//                     </section>

//                     <section id="section-edification" className="service-section">
//                         <Edification t={t} />
//                     </section>

//                     <section id="section-tramitation" className="service-section">
//                         <Licenses t={t} />
//                     </section>

//                     <section id="section-sostenibility" className="service-section">
//                         <Sostenibility t={t} />
//                     </section>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ArqServices;


import { createPortal } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import TabMenu from "../../../../components/TabMenu/TabMenu";
import UrbanDesign from "./components/UrbanDesign/UrbanDesign";
import Edification from "./components/Edification/Edification";
import Licenses from "./components/Licenses/Licenses";
import Sostenibility from "./components/Sostenibility/Sostenibility";
import './ArqServices.css';


function ArqServices({ t, hideTabMenu }) {
    const { headerVisible, headerHeight } = useHeader();
    const [showFixedMenu, setShowFixedMenu] = useState(false);
    const [isClosing, setIsClosing] = useState(false); // Nuevo estado
    const [menuKey, setMenuKey] = useState(0);
    const wrapperRef = useRef(null);
    const endRef = useRef(null);

    const services = [
        { id: 1, nameKey: 'diseñoUrbano', sectionId: 'section-urbanDesign' },
        { id: 2, nameKey: 'edificacion', sectionId: 'section-edification' },
        { id: 3, nameKey: 'tramitacionLicencias', sectionId: 'section-tramitation' },
        { id: 4, nameKey: 'sostenibilidad', sectionId: 'section-sostenibility' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (wrapperRef.current) {
                const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
                const wrapperBottom = wrapperRef.current.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                const shouldShowMenu = wrapperTop <= windowHeight && wrapperBottom > 0;

                // Si el menú está oculto y debería mostrarse, incrementar la key
                if (!showFixedMenu && shouldShowMenu && !hideTabMenu) {
                    setMenuKey(prev => prev + 1);
                    setIsClosing(false);
                }

                // Si debe ocultarse, activar animación de cierre
                if (showFixedMenu && (!shouldShowMenu || hideTabMenu)) {
                    setIsClosing(true);
                    setTimeout(() => {
                        setShowFixedMenu(false);
                        setIsClosing(false);
                    }, 400); // Duración de la animación de salida
                } else if (shouldShowMenu && !hideTabMenu) {
                    setShowFixedMenu(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [hideTabMenu, showFixedMenu]);

    return (
        <>
            {(showFixedMenu || isClosing) && createPortal(
                <div
                    key={menuKey}
                    className={`tab-menu-fixed ${isClosing ? 'closing' : ''}`}
                >
                    <TabMenu services={services} t={t} />
                </div>,
                document.body
            )}

            <div ref={wrapperRef} className="arq-services-wrapper">
                <div className="arq-services-content">
                    <section id="section-urbanDesign" className="service-section">
                        <UrbanDesign t={t} />
                    </section>

                    <section id="section-edification" className="service-section">
                        <Edification t={t} />
                    </section>

                    <section id="section-tramitation" className="service-section">
                        <Licenses t={t} />
                    </section>

                    <section id="section-sostenibility" className="service-section">
                        <Sostenibility t={t} />
                    </section>
                </div>

                <div ref={endRef} className="arq-services-end" />
            </div>
        </>
    );
}

export default ArqServices;