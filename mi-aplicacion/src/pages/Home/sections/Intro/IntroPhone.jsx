import { useRef, useState, useEffect } from 'react';
import MiniTitle from '../../../../components/Titles/MiniTitle';
import Texts from '../../../../components/Texts/Texts';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';
import './IntroPhone.css';

function IntroPhone({ t }) {

    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const datos = [
        { id: 1, type: "viviendas", qty: 34 },
        { id: 2, type: "diseñoUrbano", qty: 1 },
        { id: 3, type: "terciarios", qty: 28 },
        { id: 4, type: "eficienciaEnergetica", qty: 70 },
        { id: 5, type: "accesibilidad", qty: 26 },
        { id: 6, type: "projectMonitoring", qty: 26 },
    ];

    // Función para verificar si se puede hacer scroll
    const checkScrollability = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    // Verificar scroll al montar y cuando cambie el tamaño
    useEffect(() => {
        checkScrollability();
        window.addEventListener('resize', checkScrollability);
        return () => window.removeEventListener('resize', checkScrollability);
    }, []);

    // Función para hacer scroll a la izquierda
    const scrollLeft = () => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
    };

    // Función para hacer scroll a la derecha
    const scrollRight = () => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    };


    return (
        <section className='intro-phone-container'>
            <MiniTitle className='intro-phone-mini' text={t('usPhone')} />
            <h1 className='first-title-phone' dangerouslySetInnerHTML={{ __html: t('introText') }}></h1>
            <p className='mini-intro-phone'>
                <span>105 +</span>
                <span>{t('projects')}</span>
            </p>
            {/* <Texts text={t('miniIntro')} /> */}

            <div className='intro-image-container'>
                <img src="/Images/Home/spain 1.png" alt="" />
            </div>
            <Texts className='lorem-ipsum' text={t('miniIntro')} />

            {/* <div className='second-line-phone'>
                {datos.map(item => (
                    <div key={item.id} className='sl-item-phone'>
                        <p className='type-phone'>{t(item.type)}</p>
                        <p className='qty-phone'>{item.qty}</p>
                    </div>
                ))}
            </div> */}

            <div
                ref={scrollContainerRef}
                className='second-line-phone'
                onScroll={checkScrollability}
            >
                {datos.map(item => (
                    <div key={item.id} className='sl-item-phone'>
                        <p className='type-phone'>{t(item.type)}</p>
                        <p className='qty-phone'>{item.qty}</p>
                    </div>
                ))}
            </div>

            <div className='buttons-arrow'>
                <button
                    className={`arrow-button ${!canScrollLeft ? 'disabled' : ''}`}
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                    aria-label="Scroll left"
                >
                    <HiChevronLeft />
                </button>
                <button
                    className={`arrow-button ${!canScrollRight ? 'disabled' : ''}`}
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                    aria-label="Scroll right"
                >
                    <HiChevronRight />
                </button>
            </div>

        </section>
    )
}

export default IntroPhone;