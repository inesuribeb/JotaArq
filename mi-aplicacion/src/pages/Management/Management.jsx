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
    const { t, getRoute, changeLanguage, language, availableLanguages, loadPageContent } = useLanguage(); // ← AÑADIR loadPageContent
    const isMobile = useIsMobile(768);
    const workerRef = useRef(null);
    const [hideTabMenu, setHideTabMenu] = useState(false);

    useEffect(() => {
        loadPageContent('management');
    }, [language]);

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
            {/* <MainTitle
                title={t('serviciosDeGest')}
                subtitle={t('deGestion')}
                className="custom-class"
            /> */}
            <div className='arquitectura-superImagen'>
                <img src="/Images/Management/00.JPG" alt="" />
            </div>

            {/* <MainTitle
                title={t('serviciosDeGest')}
                subtitles={[
                    t('sloganMng1'),
                    t('sloganMng2'),
                    t('sloganMng3'),
                ]}
                className="management-class"
            /> */}
            <MainTitle
                title={t('serviciosDeGest', 'management')}
                subtitles={[
                    t('sloganMng1', 'management'),
                    t('sloganMng2', 'management'),
                    t('sloganMng3', 'management'),
                ]}
                className="management-class"
            />

            {/* <Pictures /> */}

            {isMobile ? <StatementMphone t={t} /> : <StatementM t={t} />}

            {!isMobile && (
                <div className='black-gap'>
                    {/* <h1>{t('services')}</h1> */}
                </div>
            )}

            {isMobile ? (
                <MngServicesPhone t={t} />
            ) : (
                <div className='mng-services-principal'>
                    <MngServices t={t} hideTabMenu={hideTabMenu} />
                </div>
            )}

            {!isMobile && (
                <div className='black-gap-2'>
                    {/* <h1>{t('services')}</h1> */}
                </div>
            )}

            <div ref={workerRef}>
                <Worker
                    t={t}
                    workerName="Jokin Tapia"
                    // workerRole={t('jokinRole')}
                    workerRole={t('jokinRole', 'architecture')} 
                />
            </div>
        </div>
    )
}

export default Management;