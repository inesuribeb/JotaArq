import { useLanguage } from '../../contexts/LanguageContext';
import useIsMobile from '../../hooks/useMobile';
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
    const { t, getRoute, changeLanguage, language, availableLanguages } = useLanguage();
    const isMobile = useIsMobile(768);

    return (
        <div className="home-content">

            {isMobile ? <PortadaPhone t={t} /> : <Portada t={t} />}

            {isMobile ? <IntroPhone t={t} /> : <Intro t={t} />}

            {isMobile ? <ServicesIntroPhone t={t} /> : <ServicesIntro t={t} />}

            {isMobile ? <ContactPhone t={t} /> : <Contact t={t} />}

        </div>
    )
}

export default Home; 