// import { useLanguage } from '../../contexts/LanguageContext';
// import useIsMobile from '../../hooks/useMobile';
// import MainTitle from '../../components/Titles/MainTitle';
// import Pictures from './sections/Pictures/Pictures';
// import PictureS from '../Management/sections/Picture/PictureS';
// import './Architecture.css'
// import Statement from './sections/Statement/Statement';
// import StatementPhone from './sections/Statement/StatementPhone';
// import ArqServices from './sections/ArqServices/ArqServices';
// import ArqServicesPhone from './sections/ArqServices/ArqServicesPhone';
// import Worker from '../../components/Worker/Worker';

// function Architecture() {
//     const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
//     const isMobile = useIsMobile(768);

//     return (
//         <div className="architecture-content">
//             <MainTitle
//                 title={t('serviciosDeArq')}
//                 subtitles={[
//                     t('sloganArq1'),
//                     t('sloganArq2'),
//                     t('sloganArq3'),
//                 ]}
//                 className="custom-class"
//             />

//             <PictureS />

//             {isMobile ? <StatementPhone t={t} /> : <Statement t={t} />}

//             {isMobile ? <ArqServicesPhone t={t} /> : <ArqServices t={t} />}

//             <Worker 
//                 t={t}
//                 workerName="Jokin Tapia"
//                 workerRole={t('jokinRole')}
//             />

//         </div>
//     )
// }

// export default Architecture; 


import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import useIsMobile from '../../hooks/useMobile';
import MainTitle from '../../components/Titles/MainTitle';
import Pictures from './sections/Pictures/Pictures';
import PictureS from '../Management/sections/Picture/PictureS';
import './Architecture.css'
import Statement from './sections/Statement/Statement';
import StatementPhone from './sections/Statement/StatementPhone';
import ArqServices from './sections/ArqServices/ArqServices';
import ArqServicesPhone from './sections/ArqServices/ArqServicesPhone';
import Worker from '../../components/Worker/Worker';

function Architecture() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const isMobile = useIsMobile(768);
    const workerRef = useRef(null);
    const [hideTabMenu, setHideTabMenu] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Ocultar menú cuando Worker está visible (aunque sea parcialmente)
                setHideTabMenu(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Se activa cuando el 10% de Worker es visible
                rootMargin: '-100px 0px 0px 0px' // Margen superior para activar antes
            }
        );

        if (workerRef.current) {
            observer.observe(workerRef.current);
        }

        return () => {
            if (workerRef.current) {
                observer.unobserve(workerRef.current);
            }
        };
    }, []);

    return (
        <div className="architecture-content">
            <MainTitle
                title={t('serviciosDeArq')}
                subtitles={[
                    t('sloganArq1'),
                    t('sloganArq2'),
                    t('sloganArq3'),
                ]}
                className="custom-class"
            />

            <PictureS />

            {isMobile ? <StatementPhone t={t} /> : <Statement t={t} />}

            {isMobile ? (
                <ArqServicesPhone t={t} />
            ) : (
                <ArqServices t={t} hideTabMenu={hideTabMenu} />
            )}

            <div ref={workerRef}>
                <Worker 
                    t={t}
                    workerName="Jokin Tapia"
                    workerRole={t('jokinRole')}
                />
            </div>
        </div>
    )
}

export default Architecture;