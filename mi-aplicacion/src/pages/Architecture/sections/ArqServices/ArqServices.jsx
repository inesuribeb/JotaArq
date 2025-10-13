import { useEffect, useRef } from 'react';
import { useHeader } from '../../../../contexts/HeaderContext';
import TabMenu from "../../../../components/TabMenu/TabMenu";
import UrbanDesign from "./components/UrbanDesign/UrbanDesign";
import Edification from "./components/Edification/Edification";
import Licenses from "./components/Licenses/Licenses";
import Sostenibility from "./components/Sostenibility/Sostenibility";
import './ArqServices.css';

function ArqServices({ t }) {
    const { headerVisible, headerHeight } = useHeader(); 
    const wrapperRef = useRef(null);
    const menuRef = useRef(null);

    const services = [
        { id: 1, nameKey: 'diseñoUrbano', sectionId: 'section-urbanDesign' },
        { id: 2, nameKey: 'edificacion', sectionId: 'section-edification' },
        { id: 3, nameKey: 'tramitacionLicencias', sectionId: 'section-tramitation' },
        { id: 4, nameKey: 'sostenibilidad', sectionId: 'section-sostenibility' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (wrapperRef.current && menuRef.current) {
                const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
                const menu = menuRef.current;
                
                const topPosition = headerVisible ? `${headerHeight}px` : '0';
                
                if (wrapperTop <= (headerVisible ? headerHeight : 0)) {
                    menu.style.position = 'fixed';
                    menu.style.top = topPosition;
                } else {
                    menu.style.position = 'absolute';
                    menu.style.top = '0';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); 

        return () => window.removeEventListener('scroll', handleScroll);
    }, [headerVisible, headerHeight]); 

    return (
        <div ref={wrapperRef} className="arq-services-wrapper">
            <div ref={menuRef} className="tab-menu-wrapper">
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
        </div>
    );
}

export default ArqServices;