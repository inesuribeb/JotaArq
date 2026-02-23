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
    const { t, getRoute, changeLanguage, language, availableLanguages, loadPageContent } = useLanguage(); // ← AÑADIR loadPageContent
    const isMobile = useIsMobile(768);
    const workerRef = useRef(null);
    const [hideTabMenu, setHideTabMenu] = useState(false);

    useEffect(() => {
        loadPageContent('architecture');
    }, [language]);

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
            {/* <div className='arquitectura-superImagen'>
                <img src="/Images/Home/MANTILLA.jpg" alt="" />
            </div> */}
            {/* <MainTitle
                title={t('serviciosDeArq')}
                subtitles={[
                    t('sloganArq1'),
                    t('sloganArq2'),
                    t('sloganArq3'),
                ]}
                className="architecture-class"
            /> */}
            <MainTitle
                title={t('serviciosDeArq', 'architecture')}
                subtitles={[
                    t('sloganArq1', 'architecture'),
                    t('sloganArq2', 'architecture'),
                    t('sloganArq3', 'architecture'),
                ]}
                className="architecture-class"
            />

            <PictureS />

            {isMobile ? <StatementPhone t={t} /> : <Statement t={t} />}

            {!isMobile && (
                <div className='black-gap'>
                    {/* <h1>{t('services')}</h1> */}
                </div>
            )}

            {isMobile ? (
                <ArqServicesPhone t={t} />
            ) : (
                <div className='arq-services-principal'>
                    <ArqServices t={t} hideTabMenu={hideTabMenu} />
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
                    workerName="Juan Bilbao"
                    // workerRole={t('juanRole')}
                    workerRole={t('juanRole', 'architecture')} 
                />
            </div>
        </div>
    )
}

export default Architecture;