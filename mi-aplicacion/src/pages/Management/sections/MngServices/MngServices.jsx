// import { useEffect, useRef } from 'react';
// import { useHeader } from '../../../../contexts/HeaderContext'; 
// import TabMenu from "../../../../components/TabMenu/TabMenu";
// import Certificados from "./components/Certificados/Certificados";
// import AsesoramientoUrb from "./components/AsesoramientoUrb/AsesoramientoUrb";
// import TramLicencias from "./components/TramLicencias/TramLicencias";
// import DireccionObra from "./components/DireccionObra/DireccionObra";
// import './MngServices.css';

// function MngServices({ t }) {
//     const { headerVisible, headerHeight } = useHeader();
//     const wrapperRef = useRef(null);
//     const menuRef = useRef(null);

//     const services = [
//         { id: 1, nameKey: 'certificados', sectionId: 'section-cerf' },
//         { id: 2, nameKey: 'asesoramientoUrbanistico', sectionId: 'section-asesoramiento' },
//         { id: 3, nameKey: 'tramitacionLicencias', sectionId: 'section-tramitation' },
//         { id: 4, nameKey: 'direccionObra', sectionId: 'section-direction' }
//     ];

//     useEffect(() => {
//         const handleScroll = () => {
//             if (wrapperRef.current && menuRef.current) {
//                 const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
//                 const menu = menuRef.current;
                
//                 const topPosition = headerVisible ? `${headerHeight}px` : '0';
                
//                 if (wrapperTop <= (headerVisible ? headerHeight : 0)) {
//                     menu.style.position = 'fixed';
//                     menu.style.top = topPosition;
//                 } else {
//                     menu.style.position = 'absolute';
//                     menu.style.top = '0';
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll(); 

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, [headerVisible, headerHeight]); 

//     return (
//         <div ref={wrapperRef} className="mng-services-wrapper">
//             <div ref={menuRef} className="tab-menu-wrapper">
//                 <TabMenu services={services} t={t}/>
//             </div>

//             <div className="mng-services-content">
//                 <section id="section-cerf" className="service-section">
//                     <Certificados t={t} />
//                 </section>

//                 <section id="section-asesoramiento" className="service-section">
//                     <AsesoramientoUrb t={t} />
//                 </section>

//                 <section id="section-tramitation" className="service-section">
//                     <TramLicencias t={t} />
//                 </section>

//                 <section id="section-direction" className="service-section">
//                     <DireccionObra t={t} />
//                 </section>
//             </div>
//         </div>
//     );
// }

// export default MngServices;

import { createPortal } from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import TabMenu from "../../../../components/TabMenu/TabMenu";
import Certificados from "./components/Certificados/Certificados";
import AsesoramientoUrb from "./components/AsesoramientoUrb/AsesoramientoUrb";
import TramLicencias from "./components/TramLicencias/TramLicencias";
import DireccionObra from "./components/DireccionObra/DireccionObra";
import './MngServices.css';

function MngServices({ t }) {
    const { headerVisible, headerHeight } = useHeader();
    const [showFixedMenu, setShowFixedMenu] = useState(false);
    const wrapperRef = useRef(null);

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
                const threshold = headerVisible ? headerHeight : 0;
                
                // Mostrar menú fijo cuando el wrapper pase el threshold y aún esté visible
                setShowFixedMenu(wrapperTop <= threshold && wrapperBottom > 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [headerVisible, headerHeight]);

    const topPosition = headerVisible ? headerHeight : 0;

    return (
        <>
            {/* Menú fijo renderizado fuera del main-content */}
            {showFixedMenu && createPortal(
                <div 
                    className="tab-menu-fixed"
                    style={{ top: `${topPosition}px` }}
                >
                    <TabMenu services={services} t={t}/>
                </div>,
                document.body
            )}

            <div ref={wrapperRef} className="mng-services-wrapper">
                {/* Menú estático inicial */}
                <div className="tab-menu-wrapper">
                    <TabMenu services={services} t={t}/>
                </div>

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
            </div>
        </>
    );
}

export default MngServices;