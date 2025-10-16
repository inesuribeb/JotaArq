// import { useLanguage } from '../../contexts/LanguageContext';
// import useIsMobile from '../../hooks/useMobile';
// import Portada from './sections/Portada/Portada';
// import PortadaPhone from './sections/Portada/PortadaPhone';
// import Intro from './sections/Intro/Intro';
// import IntroPhone from './sections/Intro/IntroPhone';
// import ServicesIntro from './sections/Services/ServicesIntro';
// import ServicesIntroPhone from './sections/Services/ServicesIntroPhone';
// import Contact from './sections/Contact/Contact';
// import ContactPhone from './sections/Contact/ContactPhone';
// import './Home.css'

// function Home() {
//     const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
//     const isMobile = useIsMobile(768);

//     return (
//         <div className="home-content">

//             {isMobile ? <PortadaPhone t={t} /> : <Portada t={t} />}

//             <div className='parallax'>
//                 {isMobile ? <IntroPhone t={t} /> : <Intro t={t} />}

//                 {isMobile ? <ServicesIntroPhone t={t} /> : <ServicesIntro t={t} />}

//                 {isMobile ? <ContactPhone t={t} /> : <Contact t={t} />}
//             </div>

//         </div>
//     )
// }

// export default Home; 

import { useLanguage } from '../../contexts/LanguageContext';
import useIsMobile from '../../hooks/useMobile';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import Portada from './sections/Portada/Portada';
import PortadaPhone from './sections/Portada/PortadaPhone';
import Intro from './sections/Intro/Intro';
import IntroPhone from './sections/Intro/IntroPhone';
import ServicesIntro from './sections/Services/ServicesIntro';
import ServicesIntroPhone from './sections/Services/ServicesIntroPhone';
import Contact from './sections/Contact/Contact';
import ContactPhone from './sections/Contact/ContactPhone';
import './Home.css'

function Home() {
    const { t } = useLanguage();
    const isMobile = useIsMobile(768);
    const [showPortada, setShowPortada] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Ocultar portada cuando el scroll supere 100vh
            if (scrollY >= windowHeight) {
                setShowPortada(false);
            } else {
                setShowPortada(true);
            }
        };

        let ticking = false;
        const optimizedScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', optimizedScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', optimizedScroll);
    }, []);

    return (
        <>
            {/* Portada renderizada FUERA del main-content usando portal */}
            {showPortada && createPortal(
                <div className="portada-wrapper">
                    {isMobile ? <PortadaPhone t={t} /> : <Portada t={t} />}
                </div>,
                document.body
            )}

            <div className="home-content">
                <div className='parallax'>
                    {isMobile ? <IntroPhone t={t} /> : <Intro t={t} />}
                    {isMobile ? <ServicesIntroPhone t={t} /> : <ServicesIntro t={t} />}
                    {isMobile ? <ContactPhone t={t} /> : <Contact t={t} />}
                </div>
            </div>
        </>
    )
}

export default Home;