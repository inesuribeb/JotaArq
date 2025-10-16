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




/* Version tabmenu abajo sin referencia footer */

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
                

//                 const menuBottomThreshold = 0;
//                 setShowFixedMenu(
//                     wrapperTop <= window.innerHeight - menuBottomThreshold && 
//                     wrapperBottom > menuBottomThreshold
//                 );
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [headerVisible, headerHeight]);

//     return (
//         <>
//             {showFixedMenu && createPortal(
//                 <div className="tab-menu-fixed">
//                     <TabMenu services={services} t={t}/>
//                 </div>,
//                 document.body
//             )}

//             <div ref={wrapperRef} className="arq-services-wrapper">
//                 <div className={`tab-menu-wrapper ${showFixedMenu ? 'hidden' : ''}`}>
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



/* Version tabmenu abajo con referencia footer: Revisar */

import { createPortal } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import TabMenu from "../../../../components/TabMenu/TabMenu";
import UrbanDesign from "./components/UrbanDesign/UrbanDesign";
import Edification from "./components/Edification/Edification";
import Licenses from "./components/Licenses/Licenses";
import Sostenibility from "./components/Sostenibility/Sostenibility";
import './ArqServices.css';

function ArqServices({ t }) {
    const { headerVisible, headerHeight } = useHeader();
    const [showFixedMenu, setShowFixedMenu] = useState(false);
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
            if (wrapperRef.current && endRef.current) {
                const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
                const wrapperBottom = wrapperRef.current.getBoundingClientRect().bottom;
                const endTop = endRef.current.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                const menuBottomThreshold = 0;
                const shouldShowMenu = wrapperTop <= windowHeight - menuBottomThreshold && 
                                      wrapperBottom > menuBottomThreshold;
                
                setShowFixedMenu(shouldShowMenu);

                const fixedMenu = document.querySelector('.tab-menu-fixed');
                
                if (fixedMenu && shouldShowMenu) {
                    const menuHeight = 80; // Altura aproximada del menú + margin
                    const stopPoint = windowHeight - menuHeight;
                    
                    if (endTop <= stopPoint) {
                        const offset = stopPoint - endTop;
                        fixedMenu.style.transform = `translateY(-${offset}px)`;
                    } else {
                        fixedMenu.style.transform = 'translateY(0)';
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [headerVisible, headerHeight, showFixedMenu]);

    return (
        <>
            {showFixedMenu && createPortal(
                <div className="tab-menu-fixed">
                    <TabMenu services={services} t={t}/>
                </div>,
                document.body
            )}

            <div ref={wrapperRef} className="arq-services-wrapper">
                <div className={`tab-menu-wrapper ${showFixedMenu ? 'hidden' : ''}`}>
                    <TabMenu services={services} t={t}/>
                </div>

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