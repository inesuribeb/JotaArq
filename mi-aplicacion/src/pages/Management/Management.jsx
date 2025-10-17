// import { useLanguage } from '../../contexts/LanguageContext';
// import useIsMobile from '../../hooks/useMobile';
// import MainTitle from '../../components/Titles/MainTitle';
// import Pictures from '../Architecture/sections/Pictures/Pictures';
// import PictureS from './sections/Picture/PictureS';
// import StatementM from './sections/Statement/StatementM';
// import StatementMphone from './sections/Statement/StatementMphone';
// import MngServices from './sections/MngServices/MngServices';
// import MngServicesPhone from './sections/MngServices/MngServicesPhone';
// import Worker from '../../components/Worker/Worker';
// import './Management.css'

// function Management() {
//     const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
//     const isMobile = useIsMobile(768);

//     return (
//         <div className="management-content">
//             <MainTitle
//                 title={t('serviciosDe')}
//                 subtitle={t('deGestion')}
//                 className="custom-class"
//             />

//             <Pictures />

//             {isMobile ? <StatementMphone t={t} /> : <StatementM t={t} />}

//             {isMobile ? <MngServicesPhone t={t} /> : <MngServices t={t} />}

//             <Worker 
//                 t={t}
//                 workerName="Juan Bilbao"
//                 workerRole={t('juanRole')}
//             />
//         </div>
//     )
// }

// export default Management; 

import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import useIsMobile from '../../hooks/useMobile';
import MainTitle from '../../components/Titles/MainTitle';
import Pictures from '../Architecture/sections/Pictures/Pictures';
import PictureS from './sections/Picture/PictureS';
import StatementM from './sections/Statement/StatementM';
import StatementMphone from './sections/Statement/StatementMphone';
import MngServices from './sections/MngServices/MngServices';
import MngServicesPhone from './sections/MngServices/MngServicesPhone';
import Worker from '../../components/Worker/Worker';
import './Management.css'

function Management() {
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const isMobile = useIsMobile(768);
    const workerRef = useRef(null);
    const [hideTabMenu, setHideTabMenu] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setHideTabMenu(entry.isIntersecting);
            },
            {
                threshold: 0.1,
                rootMargin: '-100px 0px 0px 0px'
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
        <div className="management-content">
            <MainTitle
                title={t('serviciosDe')}
                subtitle={t('deGestion')}
                className="custom-class"
            />

            <Pictures />

            {isMobile ? <StatementMphone t={t} /> : <StatementM t={t} />}

            {isMobile ? (
                <MngServicesPhone t={t} />
            ) : (
                <MngServices t={t} hideTabMenu={hideTabMenu} />
            )}

            <div ref={workerRef}>
                <Worker 
                    t={t}
                    workerName="Juan Bilbao"
                    workerRole={t('juanRole')}
                />
            </div>
        </div>
    )
}

export default Management;