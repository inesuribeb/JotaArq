/* Version tabmenu arriba */

// import { createPortal } from 'react-dom';
// import { useState, useEffect, useRef } from 'react';
// import { useHeader } from '../../../../contexts/HeaderContext';
// import TabMenu from "../../../../components/TabMenu/TabMenu";
// import Certificados from "./components/Certificados/Certificados";
// import AsesoramientoUrb from "./components/AsesoramientoUrb/AsesoramientoUrb";
// import TramLicencias from "./components/TramLicencias/TramLicencias";
// import DireccionObra from "./components/DireccionObra/DireccionObra";
// import './MngServices.css';

// function MngServices({ t }) {
//     const { headerVisible, headerHeight } = useHeader();
//     const [showFixedMenu, setShowFixedMenu] = useState(false);
//     const wrapperRef = useRef(null);

//     const services = [
//         { id: 1, nameKey: 'certificados', sectionId: 'section-cerf' },
//         { id: 2, nameKey: 'asesoramientoUrbanistico', sectionId: 'section-asesoramiento' },
//         { id: 3, nameKey: 'tramitacionLicencias', sectionId: 'section-tramitation' },
//         { id: 4, nameKey: 'direccionObra', sectionId: 'section-direction' }
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             if (wrapperRef.current) {
//                 const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
//                 const wrapperBottom = wrapperRef.current.getBoundingClientRect().bottom;
//                 const threshold = headerVisible ? headerHeight : 0;
                
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

//             <div ref={wrapperRef} className="mng-services-wrapper">
//                 <div className="tab-menu-wrapper">
//                     <TabMenu services={services} t={t}/>
//                 </div>

//                 <div className="mng-services-content">
//                     <section id="section-cerf" className="service-section">
//                         <Certificados t={t} />
//                     </section>

//                     <section id="section-asesoramiento" className="service-section">
//                         <AsesoramientoUrb t={t} />
//                     </section>

//                     <section id="section-tramitation" className="service-section">
//                         <TramLicencias t={t} />
//                     </section>

//                     <section id="section-direction" className="service-section">
//                         <DireccionObra t={t} />
//                     </section>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default MngServices;



/* Version tabmenu abajo con referencia footer: Revisar */

import { createPortal } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import TabMenu from "../../../../components/TabMenu/TabMenu";
import Certificados from "./components/Certificados/Certificados";
import AsesoramientoUrb from "./components/AsesoramientoUrb/AsesoramientoUrb";
import TramLicencias from "./components/TramLicencias/TramLicencias";
import DireccionObra from "./components/DireccionObra/DireccionObra";
import './MngServices.css';

// function MngServices({ t }) {
//     const { headerVisible, headerHeight } = useHeader();
//     const [showFixedMenu, setShowFixedMenu] = useState(false);
//     const wrapperRef = useRef(null);
//     const endRef = useRef(null); 

//     const services = [
//         { id: 1, nameKey: 'certificados', sectionId: 'section-cerf' },
//         { id: 2, nameKey: 'asesoramientoUrbanistico', sectionId: 'section-asesoramiento' },
//         { id: 3, nameKey: 'tramitacionLicencias', sectionId: 'section-tramitation' },
//         { id: 4, nameKey: 'direccionObra', sectionId: 'section-direction' }
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             if (wrapperRef.current && endRef.current) {
//                 const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
//                 const wrapperBottom = wrapperRef.current.getBoundingClientRect().bottom;
//                 const endTop = endRef.current.getBoundingClientRect().top;
//                 const windowHeight = window.innerHeight;

//                 const menuBottomThreshold = 0;
//                 const shouldShowMenu = wrapperTop <= windowHeight - menuBottomThreshold && 
//                                       wrapperBottom > menuBottomThreshold;
                
//                 setShowFixedMenu(shouldShowMenu);

//                 const fixedMenu = document.querySelector('.tab-menu-fixed');
                
//                 if (fixedMenu && shouldShowMenu) {
//                     const menuHeight = 80; 
//                     const stopPoint = windowHeight - menuHeight;
                    
//                     if (endTop <= stopPoint) {
//                         const offset = stopPoint - endTop;
//                         fixedMenu.style.transform = `translateY(-${offset}px)`;
//                     } else {
//                         fixedMenu.style.transform = 'translateY(0)';
//                     }
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [headerVisible, headerHeight, showFixedMenu]);

//     return (
//         <>
//             {showFixedMenu && createPortal(
//                 <div className="tab-menu-fixed">
//                     <TabMenu services={services} t={t}/>
//                 </div>,
//                 document.body
//             )}

//             <div ref={wrapperRef} className="mng-services-wrapper">
//                 <div className={`tab-menu-wrapper ${showFixedMenu ? 'hidden' : ''}`}>
//                     <TabMenu services={services} t={t}/>
//                 </div>

//                 <div className="mng-services-content">
//                     <section id="section-cerf" className="service-section">
//                         <Certificados t={t} />
//                     </section>

//                     <section id="section-asesoramiento" className="service-section">
//                         <AsesoramientoUrb t={t} />
//                     </section>

//                     <section id="section-tramitation" className="service-section">
//                         <TramLicencias t={t} />
//                     </section>

//                     <section id="section-direction" className="service-section">
//                         <DireccionObra t={t} />
//                     </section>
//                 </div>

//                 <div ref={endRef} className="mng-services-end" />
//             </div>
//         </>
//     );
// }

// export default MngServices;

function MngServices({ t, hideTabMenu }) {
    const { headerVisible, headerHeight } = useHeader();
    const [showFixedMenu, setShowFixedMenu] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [menuKey, setMenuKey] = useState(0);
    const wrapperRef = useRef(null);
    const endRef = useRef(null);

    const services = [
        { id: 1, nameKey: 'certificados', sectionId: 'section-cerf' },
        { id: 2, nameKey: 'asesoramientoUrbanistico', sectionId: 'section-asesoramiento' },
        { id: 3, nameKey: 'tramitacionLicencias', sectionId: 'section-tramitation' },
        { id: 4, nameKey: 'direccionObra', sectionId: 'section-direction' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (wrapperRef.current) {
                const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
                const wrapperBottom = wrapperRef.current.getBoundingClientRect().bottom;
                const windowHeight = window.innerHeight;

                const shouldShowMenu = wrapperTop <= windowHeight && wrapperBottom > 0;

                if (!showFixedMenu && shouldShowMenu && !hideTabMenu) {
                    setMenuKey(prev => prev + 1);
                    setIsClosing(false);
                }

                if (showFixedMenu && (!shouldShowMenu || hideTabMenu)) {
                    setIsClosing(true);
                    setTimeout(() => {
                        setShowFixedMenu(false);
                        setIsClosing(false);
                    }, 400);
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
                    <TabMenu services={services} t={t}/>
                </div>,
                document.body
            )}

            <div ref={wrapperRef} className="mng-services-wrapper">
                <div className="mng-services-content">
                    <section id="section-cerf" className="service-section">
                        <Certificados t={t} />
                    </section>

                    <section id="section-asesoramiento" className="service-section">
                        <AsesoramientoUrb t={t} />
                    </section>

                    <section id="section-tramitation" className="service-section">
                        <TramLicencias t={t} />
                    </section>

                    <section id="section-direction" className="service-section">
                        <DireccionObra t={t} />
                    </section>
                </div>

                <div ref={endRef} className="mng-services-end" />
            </div>
        </>
    );
}

export default MngServices;