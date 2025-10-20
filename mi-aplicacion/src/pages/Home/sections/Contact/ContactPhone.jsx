// import { useLanguage } from '../../../../contexts/LanguageContext';
// import MiniTitle from '../../../../components/Titles/MiniTitle';
// import Texts from '../../../../components/Texts/Texts';
// import ButtonGeneral from '../../../../components/Button/ButtonGeneral';
// import './ContactPhone.css';

// function ContactPhone({ t }) {
//     const { getRoute } = useLanguage();

//     const contactButtons = [
//         { id: 1, type: "contactWithUs", style: "primary", route: getRoute('contact') }, // Usa getRoute
//         { id: 2, type: "Instagram", style: "minimal", route: "https://www.instagram.com/jota.arquitectura_/" },
//         { id: 3, type: "Linkedin", style: "minimal", route: "https://www.linkedin.com/company/jotaarq/" },
//         { id: 4, type: "Email", style: "minimal", route: "mailto:info@yourcompany.com" },
//     ];

//     return (
//         <section className='contact-phone'>
//             <MiniTitle className='intro-phone-mini' text={t('contact')} />
//             <h1 className='first-title-phone' dangerouslySetInnerHTML={{ __html: t('contactUs') }}></h1>


//             <div className='img-contact-phone'>
//                 <img src="/Images/Home/oficinas.jpg" alt="" />
//             </div>

//             <div className='second-line-contact-phone'>
//                 {contactButtons.map((item, index) => (
//                     <div
//                         key={item.id}
//                         className={index === 0 ? 'button-container-large-phone' : 'button-container-small-phone'}
//                     >
//                         <ButtonGeneral
//                             color={item.style}
//                             text={t(item.type)}
//                             route={item.route}
//                             className='contact-button'
//                         />
//                     </div>
//                 ))}
//             </div>

//             <div className='buttons-arrow'>
//                 <button
//                     className={`arrow-button ${!canScrollLeft ? 'disabled' : ''}`}
//                     onClick={scrollLeft}
//                     disabled={!canScrollLeft}
//                     aria-label="Scroll left"
//                 >
//                     <HiChevronLeft />
//                 </button>
//                 <button
//                     className={`arrow-button ${!canScrollRight ? 'disabled' : ''}`}
//                     onClick={scrollRight}
//                     disabled={!canScrollRight}
//                     aria-label="Scroll right"
//                 >
//                     <HiChevronRight />
//                 </button>
//             </div>
//         </section>
//     )
// }

// export default ContactPhone;

import { useRef, useState, useEffect } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi2';
import { useLanguage } from '../../../../contexts/LanguageContext';
import MiniTitle from '../../../../components/Titles/MiniTitle';
import Texts from '../../../../components/Texts/Texts';
import ButtonGeneral from '../../../../components/Button/ButtonGeneral';
import './ContactPhone.css';

function ContactPhone({ t }) {
    const { getRoute } = useLanguage();
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const contactButtons = [
        { id: 1, type: "contactWithUs", style: "primary", route: getRoute('contact') },
        { id: 2, type: "Instagram", style: "minimal", route: "https://www.instagram.com/jota.arquitectura_/" },
        { id: 3, type: "Linkedin", style: "minimal", route: "https://www.linkedin.com/company/jotaarq/" },
        { id: 4, type: "Email", style: "minimal", route: "mailto:info@yourcompany.com" },
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
        <section className='contact-phone'>
            <MiniTitle className='intro-phone-mini' text={t('contact')} />
            <h1 className='first-title-phone' dangerouslySetInnerHTML={{ __html: t('contactUs') }}></h1>

            <div className='img-contact-phone'>
                <img src="/Images/Home/oficinas.jpg" alt="" />
            </div>

            <div 
                ref={scrollContainerRef}
                className='second-line-contact-phone'
                onScroll={checkScrollability}
            >
                {contactButtons.map((item, index) => (
                    <div
                        key={item.id}
                        className={index === 0 ? 'button-container-large-phone' : 'button-container-small-phone'}
                    >
                        <ButtonGeneral
                            color={item.style}
                            text={t(item.type)}
                            route={item.route}
                            className='contact-button'
                        />
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

export default ContactPhone;