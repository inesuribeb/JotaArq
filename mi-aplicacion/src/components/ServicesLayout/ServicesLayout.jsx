// import { useEffect, useRef } from 'react';
// import Texts from '../Texts/Texts';
// import './ServicesLayout2.css';

// function ServicesLayout({ bgImage, image, title, subtitle, text, reverse, t }) {

//     const bgRef = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!bgRef.current) return;

//             const rect = bgRef.current.getBoundingClientRect();
//             const scrolled = window.scrollY;

//             if (rect.top < window.innerHeight && rect.bottom > 0) {
//                 const elementCenter = rect.top + rect.height / 2;
//                 const viewportCenter = window.innerHeight / 2;
//                 const distance = viewportCenter - elementCenter;

//                 const parallaxSpeed = 0.1;
//                 const yPos = distance * parallaxSpeed;

//                 bgRef.current.style.backgroundPosition = `center calc(50% + ${yPos}px)`;
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <section className='mng-services-section-wrapper'>
//             <div className='services-mng-top'>
//                 <h3>{title}</h3>
//                 <h4>{subtitle}</h4>

//             </div>

//             <div className='infoAndPicture'>
//                 <div className='services-text'>
//                     <h5>{t('aboutService')}</h5>
//                     <Texts className='services-text-desc' text={text} />
//                 </div>

//                 <div
//                     ref={bgRef}

//                     className='services-layout-picture'
//                     style={{ backgroundImage: `url(${bgImage})` }}
//                 >
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ServicesLayout;


// import { useEffect, useRef } from 'react';
// import Texts from '../Texts/Texts';
// import './ServicesLayout2.css';

// function ServicesLayout({ bgImage, image, title, subtitle, text, reverse = false, t }) {

//     const bgRef = useRef(null);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (!bgRef.current) return;

//             const rect = bgRef.current.getBoundingClientRect();
//             const scrolled = window.scrollY;

//             if (rect.top < window.innerHeight && rect.bottom > 0) {
//                 const elementCenter = rect.top + rect.height / 2;
//                 const viewportCenter = window.innerHeight / 2;
//                 const distance = viewportCenter - elementCenter;

//                 const parallaxSpeed = 0.1;
//                 const yPos = distance * parallaxSpeed;

//                 bgRef.current.style.backgroundPosition = `center calc(50% + ${yPos}px)`;
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         handleScroll();

//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <section className='mng-services-section-wrapper'>
//             <div className='services-mng-top'>
//                 <h3>{title}</h3>
//                 <h4>{subtitle}</h4>
//             </div>

//             <div className={`infoAndPicture ${reverse ? 'reverse' : ''}`}>
//                 <div className='services-text'>
//                     <h5>{t('aboutService')}</h5>
//                     <Texts className='services-text-desc' text={text} />
//                 </div>

//                 <div
//                     ref={bgRef}
//                     className='services-layout-picture'
//                     style={{ backgroundImage: `url(${bgImage})` }}
//                 >
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ServicesLayout;







import { useEffect, useRef } from 'react';
import Texts from '../Texts/Texts';
import './ServicesLayout2.css';

function ServicesLayout({ bgImage, image, title, subtitle, text, reverse = false, t }) {

    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!bgRef.current) return;

            const rect = bgRef.current.getBoundingClientRect();
            const scrolled = window.scrollY;

            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const elementCenter = rect.top + rect.height / 2;
                const viewportCenter = window.innerHeight / 2;
                const distance = viewportCenter - elementCenter;

                const parallaxSpeed = 0.1;
                const yPos = distance * parallaxSpeed;

                bgRef.current.style.backgroundPosition = `center calc(50% + ${yPos}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='mng-services-section-wrapper'>
            <div className='services-mng-top'>

                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>

            <div className={`infoAndPicture ${reverse ? 'reverse' : ''}`}>
                <div className='services-text'>
                    <h5>{t('aboutService')}</h5>
                    <Texts className='services-text-desc' text={text} />
                </div>
                

                <div
                    ref={bgRef}
                    className='services-layout-picture'
                    style={{ backgroundImage: `url(${bgImage})` }}
                >
                </div>
            </div>
        </section>
    )
}

export default ServicesLayout;